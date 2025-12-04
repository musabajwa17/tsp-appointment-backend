import Staff from "../models/staff.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendResponse } from "../utils/response.js";

export const getAllStaff = asyncHandler(async (req, res) => {
  // 🔹 Fetch all staff members
  const staff = await Staff.find();

  return sendResponse(
    res,
    true,
    "Staff members fetched successfully",
    staff
  );
});
