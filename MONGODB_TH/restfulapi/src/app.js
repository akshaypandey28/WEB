const express=require('express');
const app=express();
require('dotenv').config();
require("./db/connection.js")

const PORT=process.env.PORT || 3000;
const studentRouter = require('./routers/student.router.js');

app.use(express.json());

//3: we need to register our router
app.use(studentRouter);


app.listen(PORT, () => {
    console.log(`connection successful at port ${PORT}`);
})


//we do not need express.json() and express.urlencoded() for GET request or DELETE request. we only
//need it for POST and PUT request

//express.json() is a inbuilt method in express to recognize the incoming Request Object as a JSON
//Object.This method is called as a middleware in our application using the code:
//app.use(express.json());






//create a new student with the help of promise
/*  app.post("/students",(req,res) => {
    const user=new Student(req.body);
    console.log(req.body);

    user.save()  //user.save() is promises so it takes sometime that's why then catch is used
    .then( () =>{
        res.status(201).send(user);
    } )  
    .catch( (err) => {
        res.status(400).send(err);
    } )
}) 
*/