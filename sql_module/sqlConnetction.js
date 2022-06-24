var mysql = require('mysql2')
var connection = mysql.createConnection({
    host: "localhost",
    port:'3306',
    user: "root",
    password: "#password1196",
    database:"db_infographics"
  });
  module.exports=connection;