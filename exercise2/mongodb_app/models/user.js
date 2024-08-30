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


// The "user" mentioned in the above line should be in
// lowercase singular form ..whereas the actual collection
// name in mongodb will be in the plural form.
// Refer to mongoose documentation for more:
// https://www.npmjs.com/package/mongoose
// The first argument is the singular name of your collection.
// Mongoose automatically looks for the lowercase pluralversion. For example, if you use
// const MyModel = mongoose.model('Ticket', mySchema);
// Then MyModel will use the tickets collection, not the Ticketcollection.