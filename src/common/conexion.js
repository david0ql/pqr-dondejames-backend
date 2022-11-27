const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'alumnos'
});
 
connection.connect();

module.exports = {
    connection
}