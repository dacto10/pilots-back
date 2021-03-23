import express from 'express';
import FlightController from '../controllers/FlightController.js'

const flight = new FlightController();

const flightRoutes = express.Router({
    strict: true
});

flightRoutes.post('/', async (req, res) => {
    const id = await flight.create(req.body);
    res.send(id);
});

flightRoutes.post('/all', async (req, res) => {
    res.send(await flight.match(req.body));
})

flightRoutes.delete('/delete/:id', async (req, res) => {
    res.send(await flight.delete(req.params.id));
})

flightRoutes.delete('/from-user/', async (req, res) => {
    res.send(await flight.deleteFromUser(req.body));
})

flightRoutes.get('/total/', async (req, res) => {
    res.send(await flight.getTotal());
})

flightRoutes.get('/by-airline/', async (req, res) => {
    res.send(await flight.getGroupedByAirline());
})

export default flightRoutes;