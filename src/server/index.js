import express from 'express';
import { connection } from '../db_handle/connection.js'
import pilotRoutes from './routes/PilotRoutes.js';
import cors from 'cors';

const app = express();
const port = 6969;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/pilot", pilotRoutes)

app.listen(port, () => {
  console.log("Server up at port " + port);
})