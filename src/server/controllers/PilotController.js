import Pilot from '../../db_handle/models/PilotModel.js';
import mongoose from 'mongoose'

const { Schema } = mongoose;

class PilotController {
    async getByUsername(username) {
        return await Pilot.findOne({ username }).exec();
    }

    async getAll() {
        return await Pilot.find({}).exec();
    }

    async login(username, password) {
        return await Pilot.findOne({username, password}).exec();
    }

    async create(body) {
        const pilot = new Pilot({
            ...body,
            isAdmin: false,
            flights: []
        });
        await pilot.save();
    }

    async deleteByUsername(username) {
        await Pilot.deleteOne({ username }).exec();
    }

    async deleteFlight(username, flight) {
        const pilot = await Pilot.findOne({username});
        pilot.flights = pilot.flights.filter(el => el != flight);
        pilot.save();
    }
    async createFlight(username, flight) {
        const pilot = await Pilot.findOne({username});
        pilot.flights.push(mongoose.Types.ObjectId(flight));
        pilot.save();
    }
}

export default PilotController;
