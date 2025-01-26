const express = require('express');
const app=express();
require('./db/connection.js');
require('dotenv').config();
const PORT=process.env.PORT || 3000;
const menRouter=require('./routers/men.router.js');

app.use(express.json());


//3: we need to register our router
app.use(menRouter);


app.listen(PORT , () =>{
    console.log(`connection is successful at PORT ${PORT}`);
})