'use strict'
import User from './user.js'
import Post from './posts.js'

async function init() {
    await User.sync(); // sync the model
    await Post.sync(); // sync the model
    // also sync any extra models here
};

init();

export default {
    User,
    Post
}