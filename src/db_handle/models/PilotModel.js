import mongoose from 'mongoose';
import PilotSchema from '../schemas/PilotSchema.js'

const Pilot = mongoose.model('Pilot', PilotSchema);

export default Pilot;