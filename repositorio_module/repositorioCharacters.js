var sql_connection=require('../sql_module/sqlConnetction');
const Character=require('../Models/Character.js')
class RepositorioCharacter{
    constructor(){
       
    }
    Criar(Characters){
      let queryCriar=`INSERT INTO characters (id,nome,gender,titles,nicknames,tv_series,books) VALUES ?`;
        var VALUES=[];
        Characters.forEach(element => {
            VALUES.push(new Character(element).getString());
           
        });
        console.log(VALUES);
        sql_connection.query(queryCriar,[VALUES],function(err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
        });
    }
    Remover(id_Character){
      let queryRemover=`DELETE FROM characters WHERE id = ?`;
      sql_connection.query(queryRemover,Id_Book,function(err, result) {
          if (err) throw err;
          console.log("Deleted Row(s): " + result.affectedRows);
      });
    }
    Obter(id_Character){
      var resultado;
      let queryObter=`SELECT * FROM characters where id = ${id_Character} `;
      return new Promise((resolve, reject) => {
        sql_connection.query(queryObter,function(err, result) {
            if (err) throw err;
            console.log(result)
            resolve(result);
        });
    })
  }
  ObterTodos(){
      let queryObter=`SELECT * FROM characters`;
      var resutado;
      return new Promise((resolve, reject) => {
        sql_connection.query(queryObter,function(err, result) {
            if (err) throw err;
            console.log(result)
            resolve(result);
        });
    })
  }
  }
var Repositorio= new RepositorioCharacter();
module.exports=Repositorio;