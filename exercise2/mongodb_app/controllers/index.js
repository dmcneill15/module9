/*module.exports = {
    userController: require('./userController')
}*/


import userControllers from './userControllers.js';
import postControllers from './postControllers.js';
import commentControllers from './commentControllers.js';

const { getUsers, createUser, deleteUser } = userControllers;
const {getPosts, createPost, deletePost, getUserPosts} = postControllers;
const { getComments, createComment, deleteComment, getPostComments} = commentControllers;

export default {
    getUsers,
    createUser,
    deleteUser,
    getPosts,
    createPost,
    deletePost,
    getUserPosts,
    getComments,
    createComment,
    deleteComment,
    getPostComments,
};