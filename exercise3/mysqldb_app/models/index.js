'use strict'
import User from './user.js'
import Post from './posts.js'
import Comment from './comment.js'
import Like from './like.js'

async function init() {
    await User.sync(); // sync the model
    await Post.sync(); // sync the model
    await Comment.sync();
    await Like().sync();

    // also sync any extra models here
    Post.belongsTo(User, { foreignKey: 'userId' });
    Comment.belongsTo(Post, { foreignKey: 'postId' });
    Comment.belongsTo(User,{ foreignKey: 'userId' });
    Like.belongsTo(Post, { foreignKey: 'PostId' });
    Like.belongsTo(User, { foreignKey: 'userId' });
    
    User.hasMany(Post, { foreignKey: 'userId' });
    Post.hasMany(Comment, { foreignKey: 'postId' });
    Post.hasMany(Like, { foreignKey: 'postId' });
    User.hasMany(Comment, { foreignKey: 'userId' });
    User.hasMany(Like, { foreignKey: 'userId' });

};

init();

export default {
    User,
    Post,
    Comment,
    Like
}