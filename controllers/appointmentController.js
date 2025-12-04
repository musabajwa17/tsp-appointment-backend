import Appointment from "../models/appointment.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendResponse } from "../utils/response.js";

export const createAppointment = asyncHandler(async (req, res) => {
  const { name, email, phone, hotelId, date, notes } = req.body;

  // 🔸 Basic validation
  if (!name || !email || !hotelId || !date) {
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
    name,
    email,
    phone,
    hotelId,
    date,
    notes,
  });

  return sendResponse(
    res,
    true,
    "Appointment created successfully",
    appointment,
    201
  );
});
