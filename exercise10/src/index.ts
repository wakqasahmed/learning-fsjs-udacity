import express from 'express';

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    res.send('API!');
})

app.listen(port, () => {
    console.log('server has started.');
})