var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'roony',
  password : 'alryyan1',
  database : 'altohami'
});
 

module.exports = connection