let express=require('express');// return an function 
const app=express();// returns an object



// adding app.use()
// app.use((req,res)=>{// callback function
//     // console.log(req);
//     // console.log(res);
//     console.log("you made a request a Ansh")
//     res.send('<h1>kese ho  bhai !!!</h1>')

// })




// for specific path only not for other cases
// app.use('/middleware',(req,res)=>{
//     res.send('<h1>hello jee</h1>')

// })




// get method



// handling bad request

app.get('*',(req,res)=>{
    res.send("abbbeeyy saallleee")
})
app.get('/',(req,res)=>{
    res.send('<h3>ye mera slash path hai!!</h3>')
})
app.get('/cat',(req,res)=>{
    res.send('<h3>ye mera slash   cat path hai!!</h3>')
})
app.get('/dog',(req,res)=>{
    res.send('<h3>ye mera slash dog path hai!!</h3>')
})

app.get('*',(req,res)=>{
    res.send("abbbeeyy saallleee")
})


app.listen(8080,()=>{
    console.log('server is listening at port 8080')
})
