import mongoose from "mongoose";

// Defining Schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
});

// Compiling Schema
const UserModel = mongoose.model("User", UserSchema);

export default UserModel;