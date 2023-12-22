import express from 'express';
import cors from 'cors';
import fs from 'fs';
import https from 'https';

import { routes } from './routes'

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

const PORT = 3000;
const HOST = process.env.HOST || '';

// const KEY = fs.readFileSync('/etc/letsencrypt/live/rbt.psi.br/privkey.pem');
// const CA = fs.readFileSync('/etc/letsencrypt/live/rbt.psi.br/chain.pem');
// const CERT = fs.readFileSync('/etc/letsencrypt/live/rbt.psi.br/cert.pem');

// const https_options = {
//     key: KEY,
//     ca: CA,
//     cert: CERT
// }

// https.createServer(https_options, app).listen(PORT, HOST, undefined, () => {
//     console.log(`Server listening! Port: ${PORT}`);
// })

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})