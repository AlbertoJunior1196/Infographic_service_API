class House{
   
    constructor(House){
        this.id=Number(House.id_houses);
        this.name=House.name_houses;
        this.region=House.region;
        this.titles= House.titles;
        this.lord=House.lord;
        this.founder=House.founder;
        this.members=House.members
    }
    getString(){
        return [this.id,this.name,this.region,JSON.stringify(this.titles),this.lord,this.founder,JSON.stringify(this.members)]
    }
}
module.exports= House; 