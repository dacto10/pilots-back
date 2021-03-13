import Pilot from '../../db_handle/models/PilotModel.js';

class PilotController {
    async getByUsername(username) {
        return await Pilot.findOne({ username }).exec();
    }

    async create(body) {
        const pilot = new Pilot({
            ...body
        });
        await pilot.save();
    }

    async deleteByUsername(username) {
        await Pilot.deleteOne({ username }).exec();
    }

    async updateFlights(username, {flights}) {
        await Pilot.findOneAndUpdate({username}, {$set: {flights}});
    }
}

export default PilotController;
