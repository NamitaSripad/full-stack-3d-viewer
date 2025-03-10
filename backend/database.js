const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./models.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS models (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      filePath TEXT NOT NULL
    )
  `);
});

module.exports = db;
