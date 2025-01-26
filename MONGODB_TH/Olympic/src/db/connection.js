const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/olmpics") //olympics is the new database
.then( () =>{
    console.log(`connection successful via mongodb`);
    
} )
.catch( (err) =>{
    console.log(`no connection ${err}`);
    
} )