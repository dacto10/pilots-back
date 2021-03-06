import mongoose from 'mongoose';
const { Schema } = mongoose;

const PilotSchema = new Schema({
    username: {
        type: String,
        required: true,
        index: {unique: true}
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    },
    birthDate: {
        type: Date,
        required: false,
    },
    name:  {
        type: Object,
        required: true,
    },
    flights: {
        type: [Schema.Types.ObjectId],
        required: true,
    },
});

export default PilotSchema;