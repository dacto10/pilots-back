import mongoose from 'mongoose';
import FlightSchema from '../schemas/FlightSchema.js'

const Flight = mongoose.model('Flight', FlightSchema);

export default Flight;