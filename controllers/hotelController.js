import Hotel from "../models/hotel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendResponse } from "../utils/response.js";

export const getAllHotels = asyncHandler(async (req, res) => {
  // 🔹 Fetch all hotels
  const hotels = await Hotel.find();

  return sendResponse(
    res,
    true,
    "Hotels fetched successfully",
    hotels
  );
});
