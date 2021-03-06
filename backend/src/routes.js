const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');
const connection = require('./database/connection');

routes.post('/sessions', sessionController.create);


routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile',profileController.index);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;