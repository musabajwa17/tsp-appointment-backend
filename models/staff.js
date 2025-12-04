import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true }, // equivalent to role
  bio: { type: String, default: "" },
  photo: { type: String, default: "" }
}, {
  timestamps: true // adds createdAt and updatedAt
});

const Staff = mongoose.model("Staff", StaffSchema);

export default Staff;
