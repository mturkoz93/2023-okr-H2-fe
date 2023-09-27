import mongoose from "mongoose";

// Defining Schema
const EntrySchema = new mongoose.Schema({
  text: { type: String, required: true },
});

// Compiling Schema
const EntryModel = mongoose.model("Entry", EntrySchema);

export default EntryModel;