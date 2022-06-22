const express =require("express")
const app = express();
const Aplicacao= require('./Aplicacao')


app.use(express.urlencoded({extended:true}));
app.use(express.json({ strict: false }));
const booksRouter=require('./routes/books');
const charactersRouter=require('./routes/characters');
const housesRouter= require('./routes/houses');

Aplicacao.InicializaTabelas();

app.use('/books',booksRouter);
app.use('/characters',charactersRouter);
app.use('/houses',housesRouter);
app.listen(9000) 