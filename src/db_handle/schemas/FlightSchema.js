import mongoose from 'mongoose';
const { Schema } = mongoose;

const FlightSchema = new Schema({
    flightId: {
        type: String,
        required: true,
        index: {unique: true}
    },
    airline: {
        type: String,
        required: true,
    },
    origin: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    departureDate: {
        type: Date,
        required: true,
    },
    arriveDate: {
        type: Date,
        required: true,
    },
});

export default FlightSchema;