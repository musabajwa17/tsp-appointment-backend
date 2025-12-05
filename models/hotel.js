import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  guest: {
    type: String,
    required: true
  },
  bath: {
    type: String,
    required: true
  },
  beds: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  images: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Room = mongoose.model("Room", RoomSchema);
export default Room;
