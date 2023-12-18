// db.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'word',
});

db.connect((err) => {
  if (err) {
    console.error('Unable to connect to MySQL:', err);
    throw err;
  }
  console.log('Connected to MySQL!');
});

module.exports = db;
