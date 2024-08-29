/*module.exports = {
    userController: require('./userController')
}*/


import userControllers from './userControllers.js';

const { getUsers, createUser } = userControllers;

export default {
    getUsers,
    createUser
};