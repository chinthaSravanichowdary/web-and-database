const express=require('express');
const Note=require('../models/post');
const User=require('../models/user');
const router=express.Router();

router.post('/',async (req,res)=>{
    try{
        const notes = await Note.getpost(req.body);
        console.log(notes);
        res.send(notes);
    }catch(err){
        res.status(401).send({message: err.message});
    }
})
