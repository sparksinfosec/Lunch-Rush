const mysql = require('mysql');

const db = mysql.createConnection({
  host: ' ',
  port: 3306,
  user: ' ',
  password: ' ',
  database: 'lunchrush'
});

db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
    } else {
      console.log('Connected to MySQL');
    }
});  

module.exports = db;
