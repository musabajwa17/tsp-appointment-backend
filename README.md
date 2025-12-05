# MERN Hotel Booking & Company Profile Backend

This is the **backend** for a MERN-based Hotel Booking and Company Profile platform.  
It provides APIs for hotels, staff profiles, and appointment/booking management.

---

## 🧱 Features

- Fully RESTful APIs for:
  - **Hotels**: Retrieve hotel listings
  - **Staff**: Retrieve team/expert staff information
  - **Bookings/Appointments**: Create new bookings
- Professional API response structure:
  ```json
  {
    "success": true,
    "message": "Hotels fetched successfully",
    "data": [ ... ]
  }

backend/
│── index.js
│── config/
│     └── db.js
│── models/
│     ├── Hotel.js
│     ├── Staff.js
│     └── Appointment.js
│── controllers/
│     ├── hotelController.js
│     ├── staffController.js
│     └── appointmentController.js
│── routes/
│     ├── hotelRoutes.js
│     ├── staffRoutes.js
│     └── appointmentRoutes.js
│── seed/
│     ├── seedHotels.js
│     └── seedStaff.js
│── utils/
│     ├── asyncHandler.js
│     └── response.js
│── middleware/
│     └── errorMiddleware.js
└── .env


git clone https://github.com/yourusername/mern-hotel-backend.git
cd mern-hotel-backend
npm install
MONGO_URI=your_mongodb_connection_string
PORT=5000
node seed/seedHotels.js
node seed/seedStaff.js
npm start
GET http://localhost:5000/
