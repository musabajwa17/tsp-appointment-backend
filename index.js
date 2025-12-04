import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import hotelRoutes from "./routes/hotel.js";
import appointmentRoutes from "./routes/appointment.js";
import staffRoutes from "./routes/staff.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/hotels", hotelRoutes);
app.use("/api/bookings", appointmentRoutes);
app.use("/api/staff", staffRoutes);
app.use(errorHandler);
app.get("/", (req, res) => {
  res.send("Booking App API Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
export default app;