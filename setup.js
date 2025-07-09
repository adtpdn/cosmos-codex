#!/usr/bin/env node

const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const path = require('path');

// Database setup
const db = new sqlite3.Database('./data.db');

async function setup() {
  console.log('Setting up Cosmos Codex database...');
  
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

  // Create default admin user
  const defaultUsername = 'admin';
  const defaultPassword = 'cosmos123';
  
  try {
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);
    
    db.run(
      'INSERT OR REPLACE INTO users (username, password, role) VALUES (?, ?, ?)',
      [defaultUsername, hashedPassword, 'admin'],
      (err) => {
        if (err) {
          console.error('Error creating admin user:', err);
        } else {
          console.log('✅ Database setup complete!');
          console.log('✅ Default admin user created:');
          console.log(`   Username: ${defaultUsername}`);
          console.log(`   Password: ${defaultPassword}`);
          console.log('');
          console.log('🚀 You can now start the server with: npm run server');
          console.log('🌐 Admin login: http://localhost:3000/admin/login');
        }
        db.close();
      }
    );
  } catch (error) {
    console.error('Error hashing password:', error);
    db.close();
  }
}

setup();