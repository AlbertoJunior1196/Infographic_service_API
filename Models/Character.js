class Character{
    
    constructor(Character){
        this.id=Number(Character.id_character);
        this.name=Character.name_character;
        this.gender=Character.gender;
        this.titles=Character.titles;
        this.nick_names=Character.nick_names;
        this.tv_series=Character.tv_series;
        this. books=Character.books;
    }
    getString(){
        return [this.id,this.name,this.gender,JSON.stringify(this.titles),JSON.stringify(this.nick_names),JSON.stringify(this.tv_series),JSON.stringify(this.books)]
    }
}
module.exports=Character;