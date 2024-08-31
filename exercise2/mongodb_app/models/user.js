import mongoose from 'mongoose'
const {Schema} = mongoose;

const userSchema = new Schema({
    userId:{type: Number, required:true, unique:true, index:true},
    userName: { type: String, trim: true, required: true },
    emailId: {type: String, trim: true, required: true, unique:true, index:true},
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
const User = mongoose.model("User", userSchema);

export default User;