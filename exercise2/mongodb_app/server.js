import express from "express";
import mongoose from "./dbConnect.js";
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

// parse requests of content-type - application / json
app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to my MongoDB application."
    });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.use('/api/users', userRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port${PORT}.`);
});