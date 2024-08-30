/*module.exports = {
    userController: require('./userController')
}*/


import userControllers from './userControllers.js';

const { getUsers, createUser, deleteUser } = userControllers;

export default {
    getUsers,
    createUser,
    deleteUser
};