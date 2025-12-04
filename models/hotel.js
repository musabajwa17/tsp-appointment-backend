import mongoose from 'mongoose';
// const { Schema, model } = mongoose;
const HotelSchema = mongoose.Schema({
name: String,
location: String,
price: Number,
rating: Number,
images: [String],
availableRooms: Number,
description: String
});
const Hotel = mongoose.model('Hotel', HotelSchema);
export default Hotel;