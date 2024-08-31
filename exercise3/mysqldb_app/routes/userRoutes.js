import express from "express";
import Controllers from "../controllers/index.js"

let router = express.Router();

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
})

// matches POST requests sent to /api/users/create
router.post('/create', (req, res) => {
    Controllers.userController.createUser(req.body, res)
})

//add a DELETE route to delete a user
router.delete('/delete/:userId', (req,res) => {
    Controllers.userController.deleteUser(req, res)
})

export default router;
