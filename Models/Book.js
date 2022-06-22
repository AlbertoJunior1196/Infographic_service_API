class Book{
    constructor(book){
        this.id=Number(book.id_book);
        this.name=book.name_book;
        this.isbn=book.isbn;
        this.authors=book.authors;
        this.numPages=book.num_pages;
        this.publisher=book.publisher;
        this.dataRelease=book.data_release;
        this.characters= book.characters;
    }
    getString(){
        return [this.id,this.name,this.isbn,JSON.stringify(this.authors),this.numPages,this.publisher,this.dataRelease,JSON.stringify(this.characters)]
    }
    
}
module.exports=Book;