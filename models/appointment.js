import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  type: {
    type: String,   // booking type
    required: true
  },

  room: {
    type: String,   // room name or id (change to ObjectId if needed)
    required: true
  },

  checkIn: {
    type: Date,
    required: true
  },

  checkOut: {
    type: Date,
    required: true
  },

  message: {
    type: String
  }

}, { timestamps: true });

const Appointment = mongoose.model('Appointment', AppointmentSchema);
export default Appointment;
