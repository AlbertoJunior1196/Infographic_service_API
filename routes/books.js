const express= require('express');
const router=express.Router();
const Aplicacao=require('../Aplicacao')




class Books{
    constructor(){
        this.books=[];
    }
    setBooks(books){
        this.books=books;
    }
    AddBook(Book){
        this.books.push(Book);
    }
    RemoveBook(idBook){
        this.books.filter((book)=>{
            return book.id!=idBook;
        })
    }
    GetAll(){
        return this.books;
    }
    Existe(id){
        this.books.forEach((book)=>{
            if(book.id==id)
            return true;
        })
        return false;
    }
}
let Livros= new Books();

router
    .post("/",(req,res)=>{
       
        Aplicacao.CriarLivros(req.body)
        res.send("Foi adicionado")
    })
    .get("/",(req,res)=>{
        console.log("saida"+Aplicacao.ObterLivros());
        Aplicacao.ObterLivros().then(function(result){
            res.send(result)
        })
    })
    .delete("/:id",(req,res)=>{
        Aplicacao.RemoverLivro(req.params.id)
    })
    .get("/:id",(req,res)=>{
        Aplicacao.ObterLivro(req.params.id).then(function(result){
            res.send(result[0])
        })
    })


function getParsedBooks(elements){
        var array=[];
        elements.forEach(function(item){
            item.authors=JSON.parse(item.authors);
            item.characters=JSON.parse(item.characters);
            array.push(item);
        })
        return array;
}
function getParsedBook(item){
    item.authors=JSON.parse(item.authors);
    item.characters=JSON.parse(item.characters);
    return item;
}
module.exports = router;