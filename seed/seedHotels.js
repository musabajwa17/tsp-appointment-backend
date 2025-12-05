import mongoose from "mongoose";
import dotenv from "dotenv";
import Hotel from "../models/hotel.js";

dotenv.config();

const seedHotels = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("📌 DB Connected for Hotel Seeding");

    // Clear existing hotels
    await Hotel.deleteMany();

    // Insert new hotels
    await Hotel.insertMany([
      {
        name: "Deluxe Rooms",
        guest: "2 Guests",
        bath: "2 Baths",
        beds: "2 Beds", 
        price: "$800 / Night",
        images: "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
      },
      {
        name: "Junior Rooms",
        guest: "2 Guests",
        bath: "1 Baths",
        beds: "2 Beds", 
        price: "$400 / Night",
        images: "https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
      },
      {
        name: "Family Rooms",
        guest: "2 Guests",
        bath: "2 Baths",
        beds: "1 Beds", 
        price: "$600 / Night",
        images: "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
      },
    ]);

    console.log("🌱 Hotels Seeded Successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding hotels:", err);
    process.exit(1);
  }
};

seedHotels();
