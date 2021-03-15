import mongoose from 'mongoose';
const { Schema } = mongoose;

const PilotSchema = new Schema({
    username: String,
    password: String,
    isAdmin: Boolean,
    name:  String,
    flights: []
});

export default PilotSchema;