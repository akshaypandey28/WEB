const mongooose = require('mongoose');
const validator=require('validator');

const studentSchema = new mongooose.Schema(
    {
        name:{
            type:String,
            required:true,
            minLength:3,
        },
        email:{
            type:String,
            required:true,
            unique:[true,"email id is already present"],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error(`Invalid email`)
                }
            }
        },
        phone:{
            type:Number,
            required:true,
            unique:true,
            validate(value) {
                if (value.toString().length < 10) {
                    throw new Error(`Phone number must be greater 10 digits`);
                }
            }
        },
        address:{
            type:String,
            required:true,
        }
    }
)

//create a new collection
const Student = new mongooose.model('Student',studentSchema);


module.exports=Student;