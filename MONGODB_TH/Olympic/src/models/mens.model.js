const express=require('express')
const mongoose=require('mongoose')

const menSchema=new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"100m"
    }
})

//creating a new collection
const MensRanking=new mongoose.model("MenRanking",menSchema); //MenRanking is the new collection

module.exports=MensRanking