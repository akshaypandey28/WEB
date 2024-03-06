const mongoose=require('mongoose')

const studentModel=require("./models/students.model1") //this is the name of the collection
const studentsModel1 = require('./models/students.model1')
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

    //running the queries on MongoDB
    dbQueries()
})

db.on("error",()=>{ //if the connection is unsuccessfull then it will thrown an event that is error
    console.log("Error while connecting to DB")
});


async function init(){
    //this function will have the logic to insert data into the db
    const student={  //this is a document
        name:"akshay",
        age:19,
        email:"akshaychaman2710@gmail.com",
        subjects:["maths","english"]
    }

    const std_obj=await studentModel.create(student) //before moving to the next step i have to wait here
    //this will create a collection and inside this student document is stored
    
    //console.log(std_obj)
}

async function dbQueries(){
    //read the student data

    //read the student data based on the id

    console.log("inside the dbQueries function")
    try{
        const student=await studentModel.findById("65dd8678f8d5f4cb539b366c") //this is a synchornous call
        //console.log(student)
    }
    catch(err){
        console.log(err)
    }
    
    //i want to go and search based on name
    console.log("i want to go and search based on name")
    try{
        const students=await studentModel.find({name:"akshay"})
        //console.log(students)
    }
    catch(err){
        console.log(err)
    }
    //searching by where filtering
    const students=await studentsModel1.where("age").gt("10").where("name").equals("akshay")
    console.log(students)

    //delete a documents from the collections where name is akshay
    console.log("delete a documents from the collections where name is akshay")
    const student=await studentsModel1.deleteOne({name:"akshay"})
    console.log(student)


    //counting the number of documents in the collections that is studentsModel1
    const count=studentsModel1.countDocuments()
    console.log(count)
}