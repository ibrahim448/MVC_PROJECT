const path = require("path");
const users = require("../models/userModel");


exports.getUser = (req,res)=>{
    res.sendFile(path.join(__dirname + "/../views/index.html"))
};

exports.saveUser = (req,res)=>{
    const {name,age} = req.body;
    const user = {
        name,
        age
    }
    users.push(user);
    res.status(201).json({
        message: true,
        users
    });
};