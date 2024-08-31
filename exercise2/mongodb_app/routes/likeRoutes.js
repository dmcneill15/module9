import express from "express";
import likeControllers from "../controllers/index.js"

let router = express.Router();

// Adds a GET route to return all comments
//http://localhost:8080/api/likes
router.get('/', (req, res) => {
    likeControllers.getLikes(res);
})

// Adds a POST route to create a new post
// http://localhost:8080/api/likes/create
router.post('/create', (req, res) => {
    likeControllers.createLike(req.body, res);
})

//add a DELETE route to delete a user
//http://localhost:8080/api/likes/delete/:likeId
router.delete('/delete/:likeId', (req,res) => {
    likeControllers.deleteLike(req, res)
})

export default router;