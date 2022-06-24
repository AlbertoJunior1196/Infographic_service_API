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
        Aplicacao.ObterHouses().then(function(result){
            res.send(result);
        })
    })
    .delete("/:id",(req,res)=>{
        Aplicacao.RemoverHouses(req.params.id)
    })
    .get("/:id",(req,res)=>{
        Aplicacao.ObterHouse(req.params.id).then(function(result){
            res.send(result[0]);
        })
    })
    function getParsedHouses(elements){
        var array=[];
        elements.forEach(function(item){
            item.titles=JSON.parse(item.titles);
            item.members=JSON.parse(item.members);
            array.push(item);
        })
        return array;
    }
    function getParsedHouse(item){
        item.titles=JSON.parse(item.titles);
        item.members=JSON.parse(item.members);
        return item
    }

module.exports = router;