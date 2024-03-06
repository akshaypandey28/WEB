/* 
    define the schema of Students collection to be stored in the database
*/

const mongoose =require("mongoose"); //importing of mongoose

//Schema

const studentSchema=new mongoose.Schema({
    name:String,
    age:Number
})


//go ahead and create corresponding collection in DB
module.exports=mongoose.model("Student",studentSchema);
//mongoose.model("Student",studentSchema); Student is the name of the collection and all the records will be stored in the Student
//that is documents will be stored in the collections and Student is in the plural form Students