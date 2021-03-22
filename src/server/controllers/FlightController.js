import Flight from '../../db_handle/models/FlightModel.js';
import mongoose from 'mongoose';

class FlightController {
    async create(body) {
        const flight = new Flight({
            ...body,
        });
        await flight.save();
        return flight._id;
    }
    async match(body) {
        body.flights = body.flights.map(el => mongoose.Types.ObjectId(el))
        return Flight.find({_id: {$in: body.flights}}).exec();
    }
    async delete(flightId) {
        const flight = await Flight.findOne({flightId}).exec();
        await Flight.findOneAndDelete({flightId}).exec();
        return flight._id;
    }
}

export default FlightController;
