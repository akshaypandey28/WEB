const express=require('express')
const MensRanking=require('../models/mens.model.js');


const router=new express.Router();


//handling post request
router.post('/mens' , async(req,res) => {
    const user=new MensRanking(req.body);
    console.log(`${user}`);
    
    try {
        const createUser=await user.save();
        res.status(201).send(createUser);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})


//retrieving the data from the database olmpics and collection MenRanking
router.get('/mens', async(req,res) => {
    try {
        const getMens = await MensRanking.find({}).sort({"ranking":1});
        res.status(200).send(getMens);
    } catch (err) {
        res.send(err);
    }
})

//retrieving single data via id
router.get('/mens/:idd', async(req,res) => { //idd is id
    try {
        const _id=req.params.idd;
        const getMen=await MensRanking.findById(_id);
        res.status(200).send(getMen);
    } catch (err) {
        console.log(`${err}`);
        
        res.status(400).send(err);
    }
})


//update by ID
router.patch('/mens/:idd', async(req,res) => { //idd is id
    try {
        const _id=req.params.idd;
        const getMen=await MensRanking.findByIdAndUpdate(_id , req.body , {new: true});
        res.status(200).send(getMen);
    } catch (err) {
        console.log(`${err}`);
        
        res.status(400).send(err);
    }
})

//delete by ID
router.delete('/mens/:idd', async(req,res) => { //idd is id
    try {
        const _id=req.params.idd;
        const getMen=await MensRanking.findByIdAndDelete(_id);
        res.status(200).send(getMen);
    } catch (err) {
        console.log(`${err}`);
        
        res.status(400).send(err);
    }
})




module.exports=router
