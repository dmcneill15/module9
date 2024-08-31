import express from "express";
//let Controllers = require("../controllers"); // index.js
import postControllers from "../controllers/index.js"

let router = express.Router();

// Adds a GET route to return all posts
//http://localhost:8080/api/posts
router.get('/', (req, res) => {
    postControllers.getPosts(res);
})

// Adds a POST route to create a new post
// http://localhost:8080/api/posts/create
router.post('/create', (req, res) => {
    postControllers.createPost(req.body, res);
})

//add a DELETE route to delete a user
//http://localhost:8080/api/users/delete
router.delete('/delete/:postId', (req,res) => {
    postControllers.deletePost(req, res)
})

router.get('/userposts/:userId', (req, res) => {
    postControllers.getUserPosts(req, res)
})


export default router;