const express = require('express')
// create an express app object by calling the express function

const app = express() //treat this as a mandatory
const PORT = 3000

app.get('/', function (req, res) {
    console.log('get request')
    res.send("hello world")
})

app.post('/home', function (req, res) {
    console.log('post request')
    res.send("Welcome to home")
})

app.patch('/home', function (req, res) {
    console.log('patch request')
    res.json({
        message: "This is a patch request",
        success: true
    })
})

app.listen(PORT, function process() {
    console.log(`Server started at port number: ${PORT}`)
})