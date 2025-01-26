const mongoose=require('mongoose');


mongoose.connect("mongodb://localhost:27017/registrationForm")  //registrationForm name of the database
.then( () =>{
    console.log(`connection successful via mongodb`);
} )
.catch( (err) =>{
    console.log(`no connection ${err}`);
} )
