const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const userModel = require('../model/userModel');
const router = express.Router();

//get all the data
router.get('/', async (req,res)=>{
    try{
        const users = await userModel.find(err, users)
        res.json(users)
    }catch(err){
        console.log({message:err})
    }
})
//create the data
router.post('/', (req, res )=>{
 
    const user = new userModel({
       title:req.body.title,
       description:req.body.description
   })
  
   user.save().then(data=>res.send(data)).catch(err=> console.error(err,'failed to save to the database'))
})

router.get('/:userId', async (req,res)=>{
    try{
        const user = await userModel.findById(req.params.userId)
    res.json(user)
    }catch(err){
        res.json({message:err})
    }
})
router.patch('/:userId', async (req,res)=>{
    try{
        const user = await userModel.updateOne({_id:req.params.userId},{$set:{title:req.body.title, description:req.body.description}})
        res.json(user)
    }catch(err){
        res.json({message:err})
    }
})
router.delete('/:userId', async(req,res)=>{
    try{
        const deleteUser = await userModel.remove({_id:req.params.userId})
        res.json(deleteUser)
    }catch(err){
        res.json({message:err})
    }
})

module.exports = router