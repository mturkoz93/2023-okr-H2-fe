import mongoose from "mongoose";

// Defining Schema
const EntrySchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

// Compiling Schema
const EntryModel = mongoose.model("Entry", EntrySchema);

export default EntryModel;