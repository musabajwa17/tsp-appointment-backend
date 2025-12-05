import Appointment from "../models/appointment.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendResponse } from "../utils/response.js";

export const createAppointment = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    type,
    room,
    checkIn,
    checkOut,
    message
  } = req.body;

  // 🔸 Basic validation (ruthless & strict)
  if (!firstName || !lastName || !email || !phone || !type || !room || !checkIn || !checkOut) {
    return sendResponse(
      res,
      false,
      "Missing required fields",
      null,
      400
    );
  }

  // 🔸 Create appointment document
  const appointment = await Appointment.create({
    firstName,
    lastName,
    email,
    phone,
    type,
    room,
    checkIn,
    checkOut,
    message
  });

  return sendResponse(
    res,
    true,
    "Appointment created successfully",
    appointment,
    201
  );
});
