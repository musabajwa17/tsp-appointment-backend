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
        bio: "Ali manages hotel operations with 10 years of experience.",
        photo: "/img/team1.jpg"
      },
      {
        name: "Sara Khan",
        title: "Receptionist",
        bio: "Sara ensures guests have a comfortable stay.",
        photo: "/img/team2.jpg"
      },
      {
        name: "Omar Farooq",
        title: "Chef",
        bio: "Omar specializes in gourmet cuisine for hotel restaurants.",
        photo: "/img/team3.jpg"
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
