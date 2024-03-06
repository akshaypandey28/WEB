// using http module (inbuilt given by node) we can setup a basic server
const http = require('http');
//alternative is express framework i.e web application framework
const PORT = 3000; //it is like delivery example to a home 
/**
 * Http module contains a function called as createServer
 * this createServer function takes a callback as the input
 * Now inside the callback, we get two arguments
 *  - request -> this argument contains all the details about the incoming req for the backend part
 *  - response -> this argument contains functions using which we can prepare the responses
 * 
 * the createServer function returns us the server object
 */

const server=http.createServer(function exec(request,response){
    //console.log(request.url) 
    console.log(request.method); //it receives a type i.e get post put etc request
    if(request.url=='/home'){
        response.end('welcome to home')
    }
    else if (request.url == '/faq') {
        response.end("List of FAQs");
    } 
    else {
        response.end("Hello world");
    }

    //response.end('hello world')
})

server.listen(PORT,()=>{
    // once the server has started then this callback will be executed for printing the below line
    console.log(`server is started at port ${PORT}`)
})