# Cosmos Codex - Express.js Documentation System

A comprehensive documentation system built with Express.js that provides persistent content editing, multi-language support, and admin management capabilities.

## 🚀 Features

### Core Functionality
- **Server-side Rendering**: EJS templating with SEO-friendly URLs
- **File-based Content Management**: Markdown files with front-matter metadata
- **Multi-language Support**: English and Chinese content with easy switching
- **Persistent Editing**: Real-time content editing with automatic saving
- **Admin Interface**: Secure admin dashboard for content management
- **Database Integration**: SQLite for user management and metadata

### Content Management
- **Markdown Support**: Full markdown rendering with gray-matter front-matter
- **Live Preview**: Real-time preview during editing
- **File Upload**: Image upload with automatic markdown insertion
- **Content Versioning**: Track changes and authorship
- **Categorized Organization**: Automatic menu generation from content structure

### User Experience
- **Responsive Design**: Mobile-first design with Ant Design components
- **Table of Contents**: Auto-generated TOC from heading structure
- **Search Functionality**: Full-text search across documentation
- **Admin Authentication**: Secure login with bcrypt password hashing
- **Session Management**: Persistent admin sessions

## 🛠️ Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Quick Start

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd cosmos-codex
   npm install
   ```

2. **Initialize Database**
   ```bash
   npm run setup
   ```
   This creates the SQLite database and default admin user:
   - Username: `admin`
   - Password: `cosmos123`

3. **Start the Server**
   ```bash
   npm run server
   ```
   Access the application at http://localhost:3000

4. **Development Mode** (with auto-restart)
   ```bash
   npm run dev
   ```

### Admin Access
- **Admin Login**: http://localhost:3000/admin/login
- **Admin Dashboard**: http://localhost:3000/admin
- **Edit Content**: Click "Edit" button on any page when logged in

## 📁 Project Structure

```
├── server/
│   └── app.js              # Express.js server configuration
├── content/
│   ├── en/                 # English content (markdown files)
│   └── zh/                 # Chinese content (markdown files)
├── views/
│   ├── layout.ejs          # Main page template
│   ├── error.ejs           # Error page template
│   └── admin/              # Admin interface templates
│       ├── login.ejs
│       ├── dashboard.ejs
│       └── edit.ejs
├── public/
│   └── uploads/            # User-uploaded files
├── setup.js                # Database initialization script
└── package.json            # Dependencies and scripts
```

## 🎨 Content Management

### Creating New Pages

1. **Through Admin Interface**:
   - Go to Admin Dashboard
   - Click "Create New Page"
   - Fill in content and metadata

2. **Manual File Creation**:
   Create a new `.md` file in `content/en/` (and `content/zh/` for Chinese):

   ```markdown
   ---
   title: Page Title
   category: general
   order: 1
   demo: false
   ---

   # Your Content Here

   This is the page content in markdown format.
   ```

### Content Structure

Each markdown file supports:
- **Front Matter**: YAML metadata (title, category, order, demo flag)
- **Markdown Content**: Full markdown syntax including images, lists, code blocks
- **Automatic Features**: TOC generation, category grouping, responsive layout

### Categories

Content is organized into categories:
- `general`: Basic components and overview
- `data-display`: Display components
- `data-entry`: Form and input components
- `layout`: Layout and structure components

## 🔧 API Endpoints

### Content API
- `GET /api/content/:page` - Get page content
- `POST /api/content/:page` - Update page content (admin only)
- `POST /api/upload` - Upload files (admin only)

### Admin Routes
- `GET /admin/login` - Admin login page
- `POST /admin/login` - Handle login
- `GET /admin` - Admin dashboard
- `GET /admin/edit/:page` - Edit page interface
- `GET /admin/logout` - Logout

### Public Routes
- `GET /` - Redirect to overview
- `GET /docs/:page` - Display documentation page
- `GET /docs/:page?lang=:lang` - Display with language selection

## 🌐 Multi-language Support

The system supports multiple languages through:
- **Separate Content Directories**: `content/en/` and `content/zh/`
- **Language Selection**: Dropdown in header
- **URL Parameters**: `?lang=zh` for Chinese content
- **Automatic Fallback**: Falls back to English if translation missing

## 🔒 Security Features

- **Password Hashing**: bcrypt for secure password storage
- **Session Management**: Express sessions with secure cookies
- **Authentication Middleware**: Protected admin routes
- **Input Validation**: Content sanitization and validation
- **File Upload Security**: Restricted file types and secure storage

## 🚀 Deployment

### Environment Variables
Create a `.env` file for production:
```env
NODE_ENV=production
PORT=3000
SESSION_SECRET=your-secret-key-here
```

### Production Setup
1. Set environment variables
2. Run database setup: `npm run setup`
3. Start server: `npm run server`
4. Configure reverse proxy (nginx/Apache) if needed

## 🔄 Migration from React

This Express.js version maintains all functionality from the original React application:
- ✅ All content preserved
- ✅ Multi-language support maintained
- ✅ Component documentation preserved
- ✅ Responsive design maintained
- ✅ Ant Design UI components preserved
- ✅ Table of contents generation
- ✅ Markdown rendering

### Key Improvements
- **Persistent Editing**: Changes are now saved to files
- **SEO-Friendly**: Server-side rendered pages
- **Admin Management**: Proper user authentication
- **File Upload**: Image upload capability
- **Database Storage**: Metadata and user management
- **Content Versioning**: Track changes and authors

## 🧪 Development

### Adding New Features
1. **Server Routes**: Add to `server/app.js`
2. **Templates**: Create EJS files in `views/`
3. **Content**: Add markdown files to content directories
4. **Styles**: Modify CSS in template files

### Database Schema
The SQLite database includes:
- `users`: Admin user accounts
- `content_meta`: Content metadata and versioning

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues and questions:
- Check the admin dashboard for system status
- Review server logs for error details
- Verify database connectivity
- Ensure proper file permissions for content directories