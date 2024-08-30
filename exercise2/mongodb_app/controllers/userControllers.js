"use strict";
import Models from "../models/index.js";
//let Models = require("../models"); // matches index.js

const getUsers = (res) => {
    // finds all users
    Models.User.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const createUser = (data, res) => {
    // creates a new user using JSON data POSTed in request body
    console.log(data)
    new Models.User(data).save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const deleteUser = (req, res) => {
    let userId = req.params.userId;

    //Had an Object casting issue when trying this method.
    /*Models.User.findByIdAndDelete({emailId: emailId})
    .then(data => {
        if(data){
            res.send({result:200, message:"User deleted successfully", data: data})
        }
        else{
            res.send({result:404, message:"User not found"})
        }
    })
    .catch(err => {
        console.log(err);
        res.send({result:500, error:err.message})
    })*/
        
        Models.User.findOne({ userId: userId })
        .then(user => {
            if (user) {
                return Models.User.deleteOne({ userId: userId });
            } else {
                res.send({ result: 404, message: "User not found" });
                return null;
            }
        })
        .then(result => {
            if (result) {
                res.send({ result: 200, message: "User deleted successfully" });
            }
        })
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
}


export default{
    getUsers,
    createUser,
    deleteUser
}