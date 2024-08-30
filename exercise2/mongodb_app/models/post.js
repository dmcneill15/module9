import mongoose from 'mongoose'
const {Schema} = mongoose;

const postSchema = new Schema({
    postId:{type: Number, required:true, unique:true, index:true},
    postTitle: { type: String, trim: true, required: true },
    postDescription: { type: String },
    postImage: { type: Buffer }, // Binary data of the image if storing the image directly to the database
    //postImage: { type: String }, // URL of the image
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
const Post = mongoose.model("post", postSchema);

export default Post;
