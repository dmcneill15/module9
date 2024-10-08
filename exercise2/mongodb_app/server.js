import express from "express";
import mongoose from "./dbConnect.js";
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js'
import likeRoutes from './routes/likeRoutes.js'

dotenv.config();

const app = express();

// parse requests of content-type - application / json
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/likes', likeRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to my MongoDB application."
    });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log(`Server is running on port${PORT}.`);
});