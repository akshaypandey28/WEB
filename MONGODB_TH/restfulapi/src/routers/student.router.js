const express = require('express');
const Student=require('../models/students.model.js');

//1: create a new router
const router = new express.Router();

//2: we need to define the router
// router.get('/students' , (req,res) => {
//     res.send(`hello`)
// })


router.post('/students', async(req,res) => {
    const user=new Student(req.body);
    console.log(req.body);

    try {
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (err) {
        console.log(err);
        
        res.status(400).send(err);
    }
})


router.get('/students',async(req,res) =>{
    try {
       const studentsData = await Student.find();
       res.send(studentsData);
    } catch (err) {
        res.send(err);
    }
})


//get the individual students data using id
router.get('/students/:id',async(req,res) => {
    try {
        const _id = req.params.id;

        const studentData = await Student.findById({_id});

        if(!studentData){
            res.status(404).send();
        }
        else{
            res.send(studentData);
        }
       
    } catch (err) {
        res.status(500).send(err);
    }
})


//update the students by it's id
router.patch('/students/:id', async(req,res) => {
    try {
        const _id=req.params.id;

        const updateStudents = await Student.findByIdAndUpdate(_id , req.body , { new: true });
        res.send(updateStudents)
    } catch (error) {
        res.status(404).send(error);
    }
})


//delete the students by it's id
router.delete('/students/:id' , async(req,res) => {
    try {
        const _id = req.params.id;
        
        const deleteStudent = await Student.findByIdAndDelete(_id);

        if(!_id){
            return res.status(400).send();
        }

        res.send(deleteStudent);
    } catch (error) {
        res.status(500).send();
    }
})

module.exports = router;

