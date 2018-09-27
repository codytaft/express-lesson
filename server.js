const peopleData = require('./data');

const express = require('express');
const app = express();

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static('public'));
app.use(function(req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

app.get('/', (request, response) => {
  // We don't need to explicitly use this handler or send a response
  // because Express is using the default path of the static assets
  // to serve this content
});

app.get('/sunsets', (request, response) => {
  response.send('Hello from A');
});

app.get('/json', (request, reponse) => {
  reponse.status(200).json(peopleData);
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});
