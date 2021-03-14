import express from 'express';
import PilotController from '../controllers/PilotController.js'

const pilot = new PilotController();

const pilotRoutes = express.Router({
    strict: true
});

pilotRoutes.post('/', async (req, res) => {
    await pilot.create(req.body);
    res.send("Pilot created");
});

pilotRoutes.post('/login', async (req, res) => {
    res.send(await pilot.login(req.body.username, req.body.password));
});

pilotRoutes.get('/:username', async (req, res) => {
    res.send(await pilot.getByUsername(req.params.username));
});

pilotRoutes.get('/', async (req, res) => {
    res.send(await pilot.getAll());
});

pilotRoutes.delete('/:username', async (req, res) => {
    await pilot.deleteByUsername(req.params.username);
    res.send("Pilot deleted");
});

pilotRoutes.put('/:username', async (req, res) => {
    await pilot.updateFlights(req.params.username, req.body);
    res.send("Flights updated");
});

export default pilotRoutes;