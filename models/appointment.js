import mongoose from 'mongoose';
const AppointmentSchema = mongoose.Schema({
name: String,
email: String,
phone: String,
hotelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
date: Date,
notes: String,
}, { timestamps: true });
const Appointment = mongoose.model('Appointment', AppointmentSchema);
export default Appointment;