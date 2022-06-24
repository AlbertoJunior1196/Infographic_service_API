var mysql = require('mysql2')
var connection = mysql.createConnection({
    host: "host.docker.internal",
    port:'3307',
    user: "root",
    password: "#password1196",
    database:"db_infographics"
  });
  module.exports=connection;