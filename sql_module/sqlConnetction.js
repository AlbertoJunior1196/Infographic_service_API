var mysql = require('mysql')
var connection = mysql.createConnection({
    host: "host.docker.internal",
    user: "root",
    password: "#password1196",
    database:"db_infographics"
  });
  module.exports=connection;