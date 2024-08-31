'use strict'
import User from './user.js'

async function init() {
    await User.sync(); // sync the model
    // also sync any extra models here
};

init();

export default {
    User,
}