import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  
  response.json(['Kennedy', 'Carla', 'Hans Chucrutes']);

});

app.listen(3333);