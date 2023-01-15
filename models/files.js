const mongoose=require('mongoose')
// mongoose.set('strictQuery', true)

const Stories= new mongoose.Schema({
    name:{
        required:true,
        type:String,
      
    },
    img:{
      required:true,
      type:String,
    
      
     
     
     
    },
     summary:{
        required:true,
      type:String,
    
    },
   
})

const storesModel =new mongoose.model('admin',Stories)
// module.exports=mongoose.model('admin',Stories)
module.exports =storesModel;