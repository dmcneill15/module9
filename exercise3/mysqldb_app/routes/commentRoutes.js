import express from "express";
import commentControllers from "../controllers/index.js"

let router = express.Router();

// Adds a GET route to return all comments
//http://localhost:8080/api/comments
router.get('/', (req, res) => {
    commentControllers.getComments(res);
})

// Adds a POST route to create a new post
// http://localhost:8080/api/comment/create
router.post('/create', (req, res) => {
    commentControllers.createComment(req.body, res);
})

//add a DELETE route to delete a user
//http://localhost:8080/api/comment/delete
router.delete('/delete/:commentId', (req,res) => {
    commentControllers.deleteComment(req, res)
})

//get all the comments on one post
//http://localhost:8080/api/comments/postcomments/:postId
router.get('/postcomments/:postId', (req, res)=>{
    commentControllers.getPostComments(req, res)
})

export default router;