import express from 'express';
import { connection } from '../db_handle/connection.js'
import pilotRoutes from './routes/PilotRoutes.js';
import flightRoutes from './routes/FlightRoutes.js'
import cors from 'cors';

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/pilot", pilotRoutes);
app.use("/flight", flightRoutes);

app.listen(port, () => {
  console.log("Server up at port " + port);
})