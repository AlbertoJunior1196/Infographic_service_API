var sql_connection=require('./sql_module/sqlConnetction');
var RepositorioBook=require("./repositorio_module/repositorioBooks");
var RepositorioHouse= require("./repositorio_module/repositorioHouses");
var RepositorioCharacter= require("./repositorio_module/repositorioCharacters");
class Aplicacao{
    constructor(){

    }
    InicializaTabelas(){
        let queryTabelaBook=`
        CREATE TABLE  if not exists books(
            id INT NOT NULL,
            nome VARCHAR(255),
            isbn VARCHAR(255),
            authors JSON,
            numPage INT,
            publisher VARCHAR(255),
            dataRelease VARCHAR(255),
            characters JSON
        )`;
        let queryTabelaCharacters=`
        CREATE TABLE  if not exists characters(
            id INT NOT NULL,
            nome VARCHAR(255),
            gender VARCHAR(255),
            titles JSON,
            nicknames JSON,
            tv_series JSON,
            books JSON
        )`; 
        let queryTabelaHouses=`
        CREATE TABLE  if not exists houses(
            id INT NOT NULL,
            nome VARCHAR(255),
            region VARCHAR(255),
            culture VARCHAR(255),
            titles JSON,
            lord VARCHAR(255),
            founder VARCHAR(255),
            members JSON
        )`; 
        sql_connection.query(queryTabelaBook,function(err,result){
            if (err) throw err;
            console.log("Table book created");
        })
        sql_connection.query(queryTabelaCharacters,function(err,result){
            if (err) throw err;
            console.log("Table characters created");
        })
        sql_connection.query(queryTabelaHouses,function(err,result){
            if (err) throw err;
            console.log("Table houses created");
        })
    }
    /*--------------------------------------------livro */
    async ObterLivro(id_livro){
        return await RepositorioBook.Obter(id_livro);
    }
    async ObterLivros(){
        return await RepositorioBook.ObterTodos();
    }
    CriarLivros(Books){
        RepositorioBook.Criar(Books);
    }
    RemoverLivro(id_Book){
        RepositorioBook.Remover(id_Book)
    } 
    /*----------------------------------------------------*/
    async ObterCharacter(id_Character){
        return await RepositorioCharacter.Obter(id_Character);
    }
    async ObterCharacters(){
        return await RepositorioCharacter.ObterTodos();
    }
    CriarCharacters(Characters){
        RepositorioCharacter.Criar(Characters);
    }
    RemoverCharacters(id_character){
        RepositorioCharacter.Remover(id_character);
    }
    /*-------------------------------------------------*/ 
    async ObterHouse(id_House){
        return await RepositorioHouse.Obter(id_House);
    }
    async ObterHouses(){
        return await RepositorioHouse.ObterTodos();
    }
    CriarHouses(Houses){
        RepositorioHouse.Criar(Houses);
    }
    RemoverHouses(id_Houses){
        RepositorioHouse.Remover(id_Houses);
    }
}
module.exports=new Aplicacao();