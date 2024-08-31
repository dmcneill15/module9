"use strict";
import Models from "../models/index.js";

// finds all users in DB, then sends array as response
const getPosts = (res) => {
    Models.Post.findAll({}).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}
// uses JSON from request body to create new user in DB
const createPost = (data, res) => {
    Models.Post.create(data).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

const deletePost = (req, res) => {
    let userId = req.params.userId; 
        Models.Post.findOne({ userId: userId })
        .then(user => {
            if (user) {
                return Models.User.deleteOne({ userId: userId });
            } else {
                res.send({ result: 404, message: "Post not found" });
                return null;
            }
        })
        .then(result => {
            if (result) {
                res.send({ result: 200, message: "Post deleted successfully" });
            }
        })
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
}


export default{
    getPosts,
    createPost,
    deletePost
}