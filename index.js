const  express =require('express');
const mongoose=require('mongoose')
const  app =express();
const bodyParser=require('body-parser')
const  router =require('./routes/router');
mongoose.connect('mongodb://localhost:27017',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{

    console.log('Connected to Database')
}).catch(err=>{
    console.log('Cannot connect',err);
    process.exit()
})
app.use(express.json())
app.use(bodyParser.json())
app.use('/api',router)

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.listen(3000,()=>{
    console.log('Server is running... ');
})