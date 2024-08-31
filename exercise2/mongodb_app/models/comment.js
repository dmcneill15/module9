import mongoose from 'mongoose'
const {Schema} = mongoose;

const commentSchema = new Schema({
    commentId:{type: Number, required:true, unique:true, index:true},
    commentContent: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // foreign key needs ObjectId type and a 'ref' to the referenced schema
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' } // foreign key needs ObjectId type and a 'ref' to the referenced schema
});
const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
