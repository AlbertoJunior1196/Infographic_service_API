var sql_connection=require('../sql_module/sqlConnetction');
const Book=require('../Models/Book.js')
class RepositorioBook{
    constructor(){

    }
    Criar(Books){
        let queryCriar=`INSERT INTO books (id,nome,isbn,authors,numpage,publisher,dataRelease,characters) VALUES ?`;
        var VALUES=[];
        Books.forEach(element => {
            VALUES.push(new Book(element).getString());
           
        });
        console.log(VALUES);
        sql_connection.query(queryCriar,[VALUES],function(err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
        });
    }
    Remover(Id_Book){
        let queryRemover=`DELETE FROM books WHERE id = ?`;
        sql_connection.query(queryRemover,Id_Book,function(err, result) {
            if (err) throw err;
            console.log("Deleted Row(s): " + result.affectedRows);
        });
    }
    Obter(id_Book){
        var resultado;
        let queryObter=`SELECT * FROM books where id = ${id_Book} `;
        return new Promise((resolve, reject) => {
            sql_connection.query(queryObter,function(err, result) {
                if (err) throw err;
                console.log(result)
                resolve(result);
            });
        })
    }
    ObterTodos(){
        let queryObter=`SELECT * FROM books`;
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
var Repositorio= new RepositorioBook();
module.exports=Repositorio;
