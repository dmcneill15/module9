"use strict";
import Models from "../models/index.js";

const getComments = (res) => {
    Models.Comment.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const createComment = (data, res) => {
    console.log(data)
    //Convert the userId to an ObjectId before saving the post.
    data.userId = new mongoose.Types.ObjectId(data.userId);
    data.postId = new mongoose.Types.ObjectId(data.postId);

    new Models.Comment(data).save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const deleteComment = (req, res) => {
    let commentId = req.params.commentId;

    Models.Comment.findOne({ commentId: commentId })
        .then(user => {
            if (user) {
                return Models.Comment.deleteOne({ commentId: commentId });
            } else {
                res.send({ result: 404, message: "Comment not found" });
                return null;
            }
        })
        .then(result => {
            if (result) {
                res.send({ result: 200, message: "Comment deleted successfully" });
            }
        })
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
}

const getPostComments = (req, res) => {
    // finds all comments for one post
    Models.Comment.find({ postId: req.params.postId }).populate({path:'postId'})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};


export default {
    getComments,
    createComment,
    deleteComment,
    getPostComments,
}