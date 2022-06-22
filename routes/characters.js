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
        res.send(Aplicacao.ObterCharacters())
    })
    .delete("/:id",(req,res)=>{
        Aplicacao.RemoverCharacters(req.params.id)
    })
    .get("/:id",(req,res)=>{
    res.send(Aplicacao.ObterCharacter(req.params.id))
    })

module.exports = router;