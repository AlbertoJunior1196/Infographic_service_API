const express= require('express');
const router=express.Router();
const Aplicacao=require('../Aplicacao')
class Houses{
    constructor(){
        this.houses=[];
    }
    AddHouses(House){
        this.houses.push(House);
    }
    RemoveHouse(idHouses){
        this.houses.filter((house)=>{
            return house.id!=idCharacter;
        })
    }
    GetAll(){
        return this.houses;
    }
    Existe(id){
        this.houses.forEach((house)=>{
            if(house.id==id)
            return true;
        })
        return false;
    }
}
let Residencias = new Houses();
router
    .post("/",(req,res)=>{
        Aplicacao.CriarHouses(req.body)
        res.send("Foi adicionado")
    })
    .get("/",(req,res)=>{
        res.send(Aplicacao.ObterHouses())
    })
    .delete("/:id",(req,res)=>{
        Aplicacao.RemoverHouses(req.params.id)
    })
    .get("/:id",(req,res)=>{
    res.send(Aplicacao.ObterHouse(req.params.id))
    })
module.exports = router;