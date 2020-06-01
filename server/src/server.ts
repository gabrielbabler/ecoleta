import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('Listagem de usuarios');

    res.json(['Gabriel', 'Leticia', 'Marcia']);
});

app.listen(3333);