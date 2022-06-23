var mysql = require('mysql')
var connection = mysql.createConnection({
    host: "127.0.0.1:3307",
    user: "root",
    password: "#password1196",
    database:"db_infographics"
  });
  module.exports=connection;