var sql_connection=require('../sql_module/sqlConnetction');
const House=require('../Models/House.js')
class RepositorioHouse{
    constructor(){
        
    }
    Criar(Houses){
      let queryCriar=`INSERT INTO houses (id,nome,region,titles,lord,founder,members) VALUES ?`;
        var VALUES=[];
        Houses.forEach(element => {
            VALUES.push(new House(element).getString());
           
        });
        console.log("Houses VAlues"+VALUES);
        sql_connection.query(queryCriar,[VALUES],function(err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
        });
    }
    Remover(Id_House){
      let queryRemover=`DELETE FROM houses WHERE id = ?`;
      sql_connection.query(queryRemover,Id_House,function(err, result) {
          if (err) throw err;
          console.log("Deleted Row(s): " + result.affectedRows);
      });
    }
    Obter(id_House){
      var resultado;
      let queryObter=`SELECT * FROM houses where id = ${id_House} `;
      return new Promise((resolve, reject) => {
        sql_connection.query(queryObter,function(err, result) {
            if (err) throw err;
            console.log(result)
            resolve(result);
        });
    }) 
  }
  ObterTodos(){
      let queryObter=`SELECT * FROM houses`;
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
var Repositorio= new RepositorioHouse();
module.exports=Repositorio;