//'use strict';
import {dbConfig} from './config.js'
import dotenv from "dotenv";
dotenv.config();
import express from 'express';

import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js'
import commentRoutes from './routes/commentRoutes.js'
import likeRoutes from './routes/likeRoutes.js'


import sequelize from './dbConnect.js'; // Adjust the path as necessary

/*console.log(`DB_NAME: ${dbConfig.DB_NAME}`);
console.log(`DB_USER: ${dbConfig.DB_USER}`);
console.log(`DB_PASSWORD: ${dbConfig.DB_PASSWORD}`);
console.log(`DB_HOST: ${dbConfig.DB_HOST}`);*/

const app = express();

// parse requests of content-type - application / json
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/likes', likeRoutes);


// set port, listen for requests
const PORT = dbConfig.PORT || 8080;


app.listen(PORT, () => {
    console.log(`Server is running on port${PORT}.`);
});