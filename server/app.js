const express = require('express');
const path = require('path');
const session = require('express-session');
const multer = require('multer');
const fs = require('fs').promises;
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const { marked } = require('marked');
const matter = require('gray-matter');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure marked for markdown processing
marked.setOptions({
  gfm: true,
  breaks: true,
  sanitize: false
});

// Database setup
const db = new sqlite3.Database('./data.db');

// Initialize database tables
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT,
    role TEXT DEFAULT 'admin'
  )`);
  
  db.run(`CREATE TABLE IF NOT EXISTS content_meta (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    page_key TEXT,
    language TEXT,
    last_modified DATETIME DEFAULT CURRENT_TIMESTAMP,
    author TEXT
  )`);
});

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'cosmos-codex-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// EJS template engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Authentication middleware
const requireAuth = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/admin/login');
  }
};

// Content loading helper
const loadContent = async (pageKey, language = 'en') => {
  try {
    const contentPath = path.join(__dirname, `../content/${language}/${pageKey}.md`);
    console.log(`Loading content from: ${contentPath}`);
    const fileContent = await fs.readFile(contentPath, 'utf8');
    const { data, content } = matter(fileContent);
    return {
      frontMatter: data,
      content,
      html: marked(content)
    };
  } catch (error) {
    console.error(`Error loading content for ${pageKey} (${language}):`, error);
    return null;
  }
};

// Content saving helper
const saveContent = async (pageKey, language, content, frontMatter = {}, author = 'admin') => {
  try {
    const contentPath = path.join(__dirname, `../content/${language}/${pageKey}.md`);
    const matterString = matter.stringify(content, frontMatter);
    await fs.writeFile(contentPath, matterString, 'utf8');
    
    // Update metadata in database
    db.run(
      'INSERT OR REPLACE INTO content_meta (page_key, language, last_modified, author) VALUES (?, ?, datetime("now"), ?)',
      [pageKey, language, author]
    );
    
    return true;
  } catch (error) {
    console.error(`Error saving content for ${pageKey} (${language}):`, error);
    return false;
  }
};

// Routes

// Main documentation routes
app.get('/', (req, res) => {
  res.redirect('/docs/overview');
});

app.get('/docs/:page?', async (req, res) => {
  const pageKey = req.params.page || 'overview';
  const language = req.query.lang || 'en';
  
  console.log(`Requested page: ${pageKey}, language: ${language}`);
  
  try {
    const contentData = await loadContent(pageKey, language);
    const menuItems = await getMenuItems(language);
    
    console.log(`Content loaded:`, !!contentData);
    console.log(`Menu items:`, menuItems.length);
    
    res.render('layout', {
      pageKey,
      language,
      content: contentData,
      menuItems,
      isAdmin: !!req.session.user,
      title: `Cosmos Codex - ${pageKey}`
    });
  } catch (error) {
    console.error('Error in docs route:', error);
    res.status(404).render('error', { error: 'Page not found' });
  }
});

// DEMO
// Inventory
app.get('/demos/inventory', (req, res) => {
  res.render('demos/inventory');
});
// Form
app.get('/demos/form', (req, res) => {
  res.render('demos/form');
});

// Admin routes
app.get('/admin/login', (req, res) => {
  res.render('admin/login', { error: null });
});

app.post('/admin/login', async (req, res) => {
  const { username, password } = req.body;
  
  db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
    if (err || !user) {
      return res.render('admin/login', { error: 'Invalid credentials' });
    }
    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.render('admin/login', { error: 'Invalid credentials' });
    }
    
    req.session.user = { id: user.id, username: user.username, role: user.role };
    res.redirect('/admin');
  });
});

app.get('/admin/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.get('/admin', requireAuth, async (req, res) => {
  const menuItems = await getMenuItems('en');
  res.render('admin/dashboard', { 
    user: req.session.user,
    menuItems 
  });
});

app.get('/admin/edit/:page', requireAuth, async (req, res) => {
  const pageKey = req.params.page;
  const language = req.query.lang || 'en';
  
  const contentData = await loadContent(pageKey, language);
  res.render('admin/edit', {
    pageKey,
    language,
    content: contentData,
    user: req.session.user
  });
});

// API routes
app.get('/api/content/:page', async (req, res) => {
  const pageKey = req.params.page;
  const language = req.query.lang || 'en';
  
  const contentData = await loadContent(pageKey, language);
  if (contentData) {
    res.json(contentData);
  } else {
    res.status(404).json({ error: 'Content not found' });
  }
});

app.post('/api/content/:page', requireAuth, async (req, res) => {
  const pageKey = req.params.page;
  const language = req.body.language || 'en';
  const { content, frontMatter } = req.body;
  
  const success = await saveContent(pageKey, language, content, frontMatter, req.session.user.username);
  if (success) {
    res.json({ success: true });
  } else {
    res.status(500).json({ error: 'Failed to save content' });
  }
});

app.post('/api/upload', requireAuth, upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  res.json({
    success: true,
    filename: req.file.filename,
    url: `/uploads/${req.file.filename}`
  });
});

// Helper function to get menu items
const getMenuItems = async (language = 'en') => {
  try {
    const contentDir = path.join(__dirname, `../content/${language}`);
    const files = await fs.readdir(contentDir);
    const menuItems = [];
    
    for (const file of files) {
      if (file.endsWith('.md')) {
        const pageKey = file.replace('.md', '');
        const contentData = await loadContent(pageKey, language);
        if (contentData && contentData.frontMatter) {
          menuItems.push({
            key: pageKey,
            title: contentData.frontMatter.title || pageKey,
            category: contentData.frontMatter.category || 'general',
            order: contentData.frontMatter.order || 999
          });
        }
      }
    }
    
    return menuItems.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Error loading menu items:', error);
    return [];
  }
};

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { error: 'Something went wrong!' });
});

app.use((req, res) => {
  res.status(404).render('error', { error: 'Page not found' });
});

app.listen(PORT, () => {
  console.log(`Cosmos Codex server running on port ${PORT}`);
});

module.exports = app;