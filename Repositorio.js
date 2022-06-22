var mysql = require('mysql')

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "#password1196",
    database:"db_infographics"
  });
  
  

  class RepositorioBook{
    constructor(Connection){
        this.connection=Connection
    }
  }
  class RepositorioCharacter{
    constructor(Connection){
        this.connection=Connection
    }
  }
  class RepositorioHouse{
    constructor(Connection){
        this.connection=Connection
    }
  }

  