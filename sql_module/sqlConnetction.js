var mysql = require('mysql')
var connection = mysql.createConnection({
    host: "mysql",
    port:'3306',
    user: "root",
    password: "#password1196",
    database:"db_infographics"
  });
  module.exports=connection;