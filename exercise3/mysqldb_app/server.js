//'use strict';
import dotenv from "dotenv";
dotenv.config();
console.log(`$$$$$$$$$$DB_NAME: ${process.env.DB_NAME}`);
import express from 'express';

import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js'


import sequelize from './dbConnect.js'; // Adjust the path as necessary

console.log(`DB_NAME: ${process.env.DB_NAME}`);
console.log(`DB_USER: ${process.env.DB_USER}`);
console.log(`DB_PASSWORD: ${process.env.DB_PASSWORD}`);
console.log(`DB_HOST: ${process.env.DB_HOST}`);

const app = express();

// parse requests of content-type - application / json
app.use(express.json());
//app.use('/api/users', userRoutes);
//app.use('/api/posts', postRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log(`Server is running on port${PORT}.`);
});