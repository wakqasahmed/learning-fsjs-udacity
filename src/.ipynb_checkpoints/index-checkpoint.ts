import express from 'express';
import { Request, Response, NextFunction } from 'express';
import logger from './logger';

const app = express();
const port = 3000;


app.get('/', (req:Request, res:Response) => {
    res.send('main route called.');
});

app.get('/countries', logger, (req:Request, res:Response) => {
    res.send('countries route called.');
});

app.get('/cities', logger, (req:Request, res:Response) => {
    res.send('cities route called.');
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});