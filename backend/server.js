require('dotenv').config()
const express=require('express');
const connectDB = require('./database');
const app=express();
const userroutes=require('./routes/user')

connectDB();

app.use(express.json())
app.use('/',userroutes)

app.listen(process.env.port,()=>{
    console.log('server is running on http://localhost:'+process.env.port+"/user")
})