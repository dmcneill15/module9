/*module.exports = {
    userController: require('./userController')
}*/


import userControllers from './userControllers.js';
import postControllers from './postControllers.js';

const { getUsers, createUser, deleteUser } = userControllers;
const {getPosts, createPost, deletePost, getUserPosts} = postControllers;

export default {
    getUsers,
    createUser,
    deleteUser,
    getPosts,
    createPost,
    deletePost,
    getUserPosts
};