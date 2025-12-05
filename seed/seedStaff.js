import mongoose from "mongoose";
import dotenv from "dotenv";
import Staff from "../models/staff.js";

dotenv.config();

const seedStaff = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("📌 DB Connected for Staff Seeding");

    // Clear existing staff
    await Staff.deleteMany();

    // Insert new staff
    await Staff.insertMany([
      {
        name: "Ali Ahmed",
        title: "Manager",
        photo: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400&auto=format&fit=crop"
      },
      {
        name: "Sara Khan",
        title: "Receptionist",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
      },
      {
        name: "Omar Farooq",
        title: "Chef",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
      },
      {
        name: "Micheal Odean",
        title: "Supervisor",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
      }
    ]);

    console.log("🌱 Staff Seeded Successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding staff:", err);
    process.exit(1);
  }
};

seedStaff();
