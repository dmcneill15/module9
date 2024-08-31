import userControllers from './userControllers.js';
import postControllers from './postControllers.js';
import commentControllers from './commentControllers.js';
import likeControllers from './likeControllers.js';

const { getUsers, createUser, deleteUser } = userControllers;
const {getPosts, createPost, deletePost} = postControllers;
const { getComments, createComment, deleteComment, getPostComments} = commentControllers;
const { getLikes, createLike, deleteLike,} = likeControllers;

export default {
    getUsers,
    createUser,
    deleteUser,
    getPosts,
    createPost,
    deletePost,
    getComments,
    createComment,
    deleteComment,
    getPostComments,
    getLikes,
    createLike,
    deleteLike,
};