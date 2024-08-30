import express from "express";
//let Controllers = require("../controllers"); // index.js
import userController from "../controllers/index.js"

let router = express.Router();

// Adds a GET route to return all users
//http://localhost:8080/api/users
router.get('/', (req, res) => {
    userController.getUsers(res);
})

// Adds a POST route to create a new user
// http://localhost:8080/api/users/create
router.post('/create', (req, res) => {
    userController.createUser(req.body, res);
})

//add a DELETE route to delete a user
//http://localhost:8080/api/users/delete
router.delete('/delete/:userId', (req,res) => {
    userController.deleteUser(req, res)
})
export default router;