const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath);

// Create users and notes tables
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT UNIQUE, password TEXT)');
  db.run('CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, title TEXT, content TEXT, FOREIGN KEY(user_id) REFERENCES users(id))');

  // Insert sample users if they do not already exist
  const sampleUsers = [
    { username: 'user1', email: 'user1@example.com', password: 'password1' },
    { username: 'user2', email: 'user2@example.com', password: 'password2' }
  ];

  sampleUsers.forEach(user => {
    db.get('SELECT * FROM users WHERE username = ?', [user.username], (err, row) => {
      if (err) throw err;
      if (!row) {
        bcrypt.hash(user.password, 10, (err, hash) => {
          if (err) throw err;

          db.run('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [user.username, user.email, hash], (err) => {
            if (err) throw err;
          });
        });
      }
    });
  });
});

module.exports = db;
