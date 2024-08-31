"use strict";
import Models from "../models/index.js";

// finds all users in DB, then sends array as response
const getUsers = (res) => {
    Models.User.findAll({}).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}
// uses JSON from request body to create new user in DB
const createUser = (data, res) => {
    Models.User.create(data).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const deleteUser = (req, res) => {
    let userId = req.params.userId; 
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