import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import endepoints from './endepoints.js'

const server = express ();
server.use(express.json());
server.use(cors());
server.use(endepoints);




server.listen(process.env.PORT,
    () => console.log(`API online na porta ${process.env.PORT}`));