const express = require('express');
// create an express app object by calling the express function
const bodyParser=require('body-parser')
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({extended:true})) //for reading the input from postman
app.use(bodyParser.json()); //app.use() it sets up the middlewares

//app.use(express.json()) //it prints only the this {} not the body content or any content


//mimic the db using an array
let blogsList=[];

app.get('/blogs',(req,res)=>{
    return res.status(200).json({
        data:blogsList,
        success:true,
    })
})

app.post('/blogs',(req,res)=>{
    console.log(req.body) //prints undefined because by default we cannot access the request body as body data is sensitive
    //console.log(req.query)
    blogsList.push({
        title:req.body.title,
        content:req.body.content,
        id:Math.random()
    })
    return res.status(201).json({
        success:true
    })
})

app.get('/blogs/:id',(req,res)=>{
    //console.log(req.params) //it prints object in json key value pair id is the key
    const result = blogsList.filter((blog)=>{ //callback function blog is used to iterate over the array
        blog.id==req.params.id
    })
    return res.status(200).json({
        data:result,
        success:true
    })
})

app.delete('blogs/:id',(req,res)=>{
    //TODO
})

app.listen(PORT,()=>{
    console.log("server started on PORT ",PORT)
})
