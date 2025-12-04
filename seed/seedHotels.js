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
        name: "Pearl Continental",
        location: "Lahore",
        price: 20000,
        rating: 4.5,
        images: ["/img/hotel1_1.jpg", "/img/hotel1_2.jpg"],
        availableRooms: 10,
        description: "Luxury stay with modern amenities"
      },
      {
        name: "Serena Hotel",
        location: "Islamabad",
        price: 18000,
        rating: 4.2,
        images: ["/img/hotel2_1.jpg", "/img/hotel2_2.jpg"],
        availableRooms: 8,
        description: "Premium rooms with excellent service"
      },
      {
        name: "Pearl Continental Karachi",
        location: "Karachi",
        price: 22000,
        rating: 4.6,
        images: ["/img/hotel3_1.jpg", "/img/hotel3_2.jpg"],
        availableRooms: 12,
        description: "Beachside luxury experience"
      }
    ]);

    console.log("🌱 Hotels Seeded Successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding hotels:", err);
    process.exit(1);
  }
};

seedHotels();
