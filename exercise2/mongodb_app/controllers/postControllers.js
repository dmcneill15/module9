"use strict";
import Models from "../models/index.js";
import mongoose from 'mongoose'

const getPosts = (res) => {
    Models.Post.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const createPost = (data, res) => {
    console.log(data)
    //Convert the userId to an ObjectId before saving the post.
    data.userId = new mongoose.Types.ObjectId(data.userId);

    new Models.Post(data).save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const deletePost = (req, res) => {
    let postId = req.params.postId;

    Models.Post.findOne({ postId: postId })
        .then(user => {
            if (user) {
                return Models.Post.deleteOne({ postId: postId });
            } else {
                res.send({ result: 404, message: "User not found" });
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

const getUserPosts = (req, res) => {
    // finds all posts for a given user and populates with user details
    //'userId', 'userName emailId'
    Models.Post.find({ userId: req.params.userId }).populate({path:'userId'})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};


export default {
    getPosts,
    createPost,
    deletePost,
    getUserPosts
}