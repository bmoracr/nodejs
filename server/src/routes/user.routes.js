const { Router } = require('express');

const UserModel = require('../model/users');

const userRoutes = Router();

userRoutes.route('/register').post((req,res)=>{

    const username = req.body.username;
    const name = req.body.name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const birthday = Date.parse(req.body.birthday);


    const newUserModel = new UserModel({
        username,
        name,
        last_name,
        email,
        birthday
    });

    newUserModel.save()
        .then(()=> res.json('User added!'))
        .catch(err=>res.status(400).json('Error: '  + err));
    
});

userRoutes.route('/login').get((req,res)=>{
    
    res.send("This is user login");
    
});

userRoutes.route('/logout').get((req,res)=>{
    
    res.send("This is user logout");
    
});

userRoutes.route('/get/:id').get((req,res)=>{
    
    UserModel.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err=>res.status(400).json('Error: '  + err));
    
});

userRoutes.route('/get').get((req,res)=>{
    
    UserModel.find()
        .then(user => res.json(user))
        .catch(err=>res.status(400).json('Error: '  + err));
    
});

module.exports = userRoutes;