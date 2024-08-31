'use strict';
import express from 'express';
import sequelize from './dbConnect.js'; // Adjust the path as necessary
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();

// parse requests of content-type - application / json
app.use(express.json());
app.use('/api/users', userRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to my mySQL application."
    });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log(`Server is running on port${PORT}.`);
});