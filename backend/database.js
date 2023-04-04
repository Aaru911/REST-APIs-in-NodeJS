const mongoose=require('mongoose');
require('dotenv').config()
const connectDB=()=>{
    mongoose.connect(process.env.db_url).then((data)=>{
        console.log(`MongoDB is Connected With the server: ${data.connection.host}`)
    })
}
module.exports=connectDB;


