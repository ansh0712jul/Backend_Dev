const express=require('express')
const app=express()
const path=require('path')

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))// middleware to get the form data
app.use(express.json())// middleware for json data

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/users',(req,res)=>{
    let {username,age}=req.query
    console.log(username);
    res.send('get request s form submit ho gya !!')
})

// post request ko handle krne k liye
app.post('/users',(req,res)=>{
    // let {username,age}=req.query
    console.log(req.body);
    res.send('post request s form submit ho gya !!')
})

app.listen(8080,()=>{
    console.log('server kya tu sun rha h mujhe 8080 pr?')
})
