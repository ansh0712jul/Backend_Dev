let express=require('express')
let app=express();
let ejs = require('ejs');
const path=require('path');


app.set('view engine','ejs');// view enigne ko set kr diya taaki templates ko dekh paao
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('index');
})

// route for random 
app.get('/random',(req,res)=>{
    let rn=Math.floor(Math.random()*100) 
    res.render('random',{rn});
})

// creating todo list

const todos = ['go to gym', 'write your diary', 'take breakfast'];

// Route to handle the GET request for todos
app.get('/todo', (req, res) => {
    res.render('todos', { todos });
});



app.listen(8080,()=>{
    console.log("app is listening at port 8080");
})
