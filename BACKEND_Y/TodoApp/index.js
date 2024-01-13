const express=require('express'); //imports the express library 
//we got access to express() function
const app=express(); //app is a new application object



const bodyparser=require('body-parser'); //helps to read the incoming body data object and try to parse it in the form of
//corresponding json


const port=3000;



app.use(bodyparser.json()) // for parsing application/json
app.use(bodyparser.text()) // for parsing application/text
app.use(bodyparser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded




//let's define some routes
app.get('/ping',(request,response) => {
    //if somebodey hits localhost:3000/ping from this machine ,we will execute this callback
    // request object contains detail about incoming request ,details like query params ,body params etc
    //response object contains details about what response will be sent back to the client 
    //here client is postman
    console.log('ping received');

    console.log(request.query); //request.query is js object
    console.log(request.body); //request.body is js object

    response.json({message:'ping received'});
}); //takes two arguments one is route as a string and second is callback and this callback receives two parameters (req ,res )



app.post( '/categories/:category/products/:id' , (request,response) => {
    //here electronics is variable part of the url that's why it is repalced with the :category and same for the :id

    console.log(request.params);
    console.log(request.headers)

    response.json({message:'ping received'});
});



//1. using the app object ,bind it to a port u want your server to listen for socket connection
app.listen(port,() => { 
// this callback is useful to do any action post the server is created
// callback is executed once we successfully bind out object to the port
    console.log("server started at the port 3000");
});//listen method takes two parameters  1=> port number  2=>callback



/**
 * 
 * 1. URL Params -> /products/1 or /products/2
 * 2. Query Params -> /products?rating=4&min_price=30&max_price=100
 * 3. Body Params -> 
 */

 
// line no. 11 and 12 is important for the request.body to fetch data from postman testing