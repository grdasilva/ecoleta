import express from 'express';

const app = express();

app.get('/users', (request, response) => { 
    response.json([
        'guilherme',
        'gustavo',
        'celio'
    ]);
})

app.listen(3333);