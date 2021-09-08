import mongoose from "mongoose";

//creating a schema for the collection
const cardSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
});

// creating a model out of tyhe schema
export default mongoose.model("cards", cardSchema);
