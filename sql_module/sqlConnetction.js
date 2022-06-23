var mysql = require('mysql')
var connection = mysql.createConnection({
    host: "localhost",
    port:'3307',
    user: "root",
    password: "#password1196",
    database:"db_infographics"
  });
  module.exports=connection;