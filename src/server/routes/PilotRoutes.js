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
    res.send(await pilot.deleteByUsername(req.params.username));
});

pilotRoutes.put('/:username/:flight', async (req, res) => {
    await pilot.createFlight(req.params.username, req.params.flight);
    res.send("Flight added");
});

pilotRoutes.put('/remove/:username/:flight', async (req, res) => {
    await pilot.deleteFlight(req.params.username, req.params.flight);
    res.send("Flight deleted");
});

pilotRoutes.get('/total/', async (req, res) => {
    res.send(await pilot.getTotalPilots())
})

export default pilotRoutes;