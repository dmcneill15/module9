"use strict";
import Models from "../models/index.js";

const getLikes = (res) => {
    Models.Like.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const createLike = (data, res) => {
    console.log(data)
    //Convert the userId to an ObjectId before saving the post.
    data.userId = new mongoose.Types.ObjectId(data.userId);
    data.postId = new mongoose.Types.ObjectId(data.postId);

    new Models.Like(data).save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const deleteLike = (req, res) => {
    let likeId = req.params.likeId;

    Models.Like.findOne({ likeId: likeId })
        .then(user => {
            if (user) {
                return Models.Like.deleteOne({ likeId: likeId });
            } else {
                res.send({ result: 404, message: "Like not found" });
                return null;
            }
        })
        .then(result => {
            if (result) {
                res.send({ result: 200, message: "Like deleted successfully" });
            }
        })
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
}

export default {
    getLikes,
    createLike,
    deleteLike,
}