/* 
    define the schema of Students collection to be stored in the database
*/
const mongoose =require("mongoose"); //importing of mongoose

//Schema
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true //validations
    },
    age:{
        type:Number,
        min:19 
    },
    email:{
        type:String,
        required:true, //validations
        lowercase:true, //validations
        minLength:15
    },
    subjects:[String],
    createdAt:{
        type:Date,
        immutable:true, //validations
        default:()=>{
            return Date.now()
        }
    }
},{versionKey:false,timestamps:true}) //timestamps is for updatedAt


//go ahead and create corresponding collection in DB
module.exports=mongoose.model("Student",studentSchema);
//mongoose.model("Student",studentSchema); Student is the name of the collection and all the records will be stored in the Student
//that is documents will be stored in the collections and Student is in the plural form Students