const express=require('express');


const router=express.Router()
const storesModel=require('../models/files')
const objectId=require('mongoose').Types.ObjectId


router.get("/",(req,res)=>{
   storesModel.find().then(data=>res.status(201).json(data)).catch(err=>console.log(err))


})

router.get('/:id',(req,res)=>{
    if(objectId.isValid(req.params.id)==false)
    res.status(400).json({
        err:'Given object id is not Valid'
    })
    else
   storesModel.findById(req.params.id).then(data=>{
         if(data){
           res.send(data)
         }else{
           res.status(404).json({
            err:'no record with this Given _id : ' + req.params.id 
           })
           
         }
   }).catch(err=>console.log(err))
    
})


router.post('/',(req,res)=>{
    storesModel.create(req.body)
    .then(data=>res.status(201).json(data))
    .catch(err=> console.log(err))
})

router.put('/:id',(req,res)=>{
    storesModel.findByIdAndUpdate(req.params.id,req.body)
    .then(data=>res.status(201).json(data))
    .catch(err=> console.log(err))
})


router.delete('/:id',(req,res)=>{
    storesModel.findByIdAndDelete(req.params.id)
    .then(data=>res.status(201).json(data))
    .catch(err=> console.log(err))
})


module.exports=router