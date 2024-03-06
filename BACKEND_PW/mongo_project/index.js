const mongoose=require('mongoose')

const studentModel=require("./models/students.model")
/* 
    write the code to connect with MongoDB
*/

mongoose.connect("mongodb://localhost/be_demodb") // local server  //here where to connect
//be_demodb   is the name of the database

const db=mongoose.connection  //start the connection with MongoDB  //here ordering to connect

db.once("open",()=>{ //if the connection is successfull then it will thrown an event that is open
    console.log("Connected to MongoDB")

    //logic to insert data into the db
    init()
})

db.on("error",()=>{ //if the connection is unsuccessfull then it will thrown an event that is error
    console.log("Error while connecting to DB")
});


async function init(){
    //this function will have the logic to insert data into the db
    const student={  //this is a document
        name:"akshay",
        age:19
    }

    const std_obj=await studentModel.create(student) //before moving to the next step i have to wait here
    //this will create a collection and inside this student document is stored
    
    console.log(std_obj)
}