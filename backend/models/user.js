const mongoose=require('mongoose');

const userschema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String, 
        require:true 
    },
    regdate:{
        type:Date,
        require:true,
        default:Date.now
    }
})

module.exports=mongoose.model('user',userschema)