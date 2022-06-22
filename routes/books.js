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
        res.send(Aplicacao.ObterLivros())
    })
    .delete("/:id",(req,res)=>{
        Aplicacao.RemoverLivro(req.params.id)
    })
    .get("/:id",(req,res)=>{
       res.send(Aplicacao.ObterLivro(req.params.id))
    })
module.exports = router;