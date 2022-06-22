const express= require('express');
const router=express.Router();
const Aplicacao=require('../Aplicacao')
class Characters{
    constructor(){
        this.characters=[];
    }
    AddCharacter(Character){
        this.characters.push(Character);
    }
    RemoveCharacter(idCharacter){
        this.characters.filter((character)=>{
            return character.id!=idCharacter;
        })
    }
    GetAll(){
        return this.characters;
    }
    Existe(id){
        this.characters.forEach((character)=>{
            if(character.id==id)
            return true;
        })
        return false;
    }
}
let Personagens = new Characters();
router
    .post("/",(req,res)=>{
        Aplicacao.CriarCharacters(req.body)
        res.send("Foi adicionado")
    })
    .get("/",(req,res)=>{
        Aplicacao.ObterCharacters().then(function(result){
            res.send(getParsedCharacters(result))
        })
    })
    .delete("/:id",(req,res)=>{
        Aplicacao.RemoverCharacters(req.params.id)
    })
    .get("/:id",(req,res)=>{
        Aplicacao.ObterCharacter(req.params.id).then(function(result){
            res.send(getParsedCharacter(result[0]))
        })
    })
     
    function getParsedCharacters(elements){
        var array=[];
        elements.forEach(function(item){
            item.titles=JSON.parse(item.titles);
            item.nicknames=JSON.parse(item.nicknames);
            item.tv_series=JSON.parse(item.tv_series);
            item.books=JSON.parse(item.books);
            array.push(item);
        })
        return array;   
    }
    function getParsedCharacter(item){
        item.titles=JSON.parse(item.titles);
        item.nicknames=JSON.parse(item.nicknames);
        item.tv_series=JSON.parse(item.tv_series);
        item.books=JSON.parse(item.books);
        return item;

    }
module.exports = router;