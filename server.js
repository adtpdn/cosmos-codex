const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/antd', express.static(path.join(__dirname, 'node_modules/antd/dist')));

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import content data
const { initialContent, translations } = require('./src/content-server');

// Routes
app.get('/', (req, res) => {
    const lang = req.query.lang || 'en';
    const page = req.query.page || 'overview';
    const { marked } = require('./src/content-server');
    
    const t = initialContent[lang];
    const descriptionKey = `${page}Description`;
    const parsedContent = t[descriptionKey] ? marked.parse(t[descriptionKey]) : '';
    
    res.render('index', {
        lang,
        page,
        content: initialContent,
        t,
        parsedContent
    });
});

app.get('/api/content/:lang', (req, res) => {
    const { lang } = req.params;
    res.json(initialContent[lang] || initialContent.en);
});

app.post('/api/content/:lang', (req, res) => {
    const { lang } = req.params;
    const { key, value } = req.body;
    
    if (initialContent[lang]) {
        initialContent[lang][key] = value;
        res.json({ success: true });
    } else {
        res.status(400).json({ error: 'Language not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});