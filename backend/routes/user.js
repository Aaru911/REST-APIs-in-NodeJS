const express = require('express');
const routes = express.Router();
const User = require('../models/user')


//get all users
routes.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (err) {
        res.status(500).json({ Message: err.Message })
    }
})

//get one
routes.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const name = user.name
        const email = user.email
        const password = user.password
        res.send(name)
    } catch (err) {
        res.status(500).json({ Message: err.Message })
    }
})

//create one
routes.post('/add', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const newuser = await user.save()
        res.status(201).json(newuser);

    } catch (err) {
        res.status(400).json({ Message: err.Message })
    }
})
//update one
routes.patch('/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    if (req.body.name != null) {
        user.name = req.body.name
    }
    if (req.body.email != null) {
        user.email = req.body.email
    }
    if(req.body.password!=null){
        user.password=req.body.password
    }
    try {
        const updateduser = await user.save()
        res.json(updateduser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
//delete one
routes.delete('/:id', async(req, res) => {
    try{
        const user= await User.findByIdAndDelete(req.params.id)
        res.status(200).json(user).send("Operation Successful")
    }catch(err){
        res.status(500).json({Message:err.Message})
    }
    

})


module.exports = routes