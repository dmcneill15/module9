import express from "express";
//let Controllers = require("../controllers"); // index.js
import userController from "../controllers/index.js"

let router = express.Router();

// Adds a GET route to return all users
router.get('/', (req, res) => {
    userController.getUsers(res);
})
// Adds a POST route to create a new user
router.post('/create', (req, res) => {
    userController.createUser(req.body, res);
})
export default router;