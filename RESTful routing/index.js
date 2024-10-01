const express=require('express')
const app=express()
const path=require('path')
const methodOverride = require('method-override')


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))


// dummy array instead of DB

let comments=[
    {
    id:0,
    username:"Akshay",
    comment:"kuch nhi"
    },
    {
        id:1,
        username:"Ansh",
        comment:"hello yaaro"
    },
    {
        id:2,
        username:"xyz",
        comment:"kya haalchaal bhai logo "
    },
    {
        id:3,
        username:"thalapathy",
        comment:"or sb bhadiya chl rha h ansh babu"
    },

]

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))// methode overriding for post ot patch



app.get('/',(req,res)=>{
    console.log('root m aapka swaagat hai !!')
})
// show all blogs on a page
app.get('/blogs',(req,res)=>{
    res.render('index',{comments})
})


// to actually add in DB
app.post('/blogs',(req,res)=>{
    let {username,comment}=req.body;
    comments.push({username,comment,id:comments.length})
    res.redirect('/blogs')

})

// show just a form to add new blog
app.get('/blog/new',(req,res)=>{
    res.render('new')
})

// show information about one blog

app.get('/blogs/:id',(req,res)=>{
    let {id}=req.params
    let foundComment=comments.find(comment=>comment.id==id)
    res.render('show',{foundComment})
})

//edit form of one blog
app.get('/blogs/:id/edit',(req,res)=>{
    let {id}=req.params;
    let foundComment=comments.find(comment=>comment.id==id)
    res.render('edit',{foundComment})
})

// task->6 actually editing this blog using patch not put coz we are doing partial changes here..
app.patch('/blogs/:id',(req,res)=>{
    let {id}=req.params;
    let foundComment=comments.find(comment=>comment.id==id)
    let {comment}=req.body
    foundComment.comment=comment// changing all ready present data to newly data
    res.redirect('/blogs')

})


app.listen(8080,()=>{
    console.log('server kya tu sun rha h mujhe 8080 pr?')
})
