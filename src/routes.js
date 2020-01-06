const express = require('express');
const routes = express.Router();
const PlanetaController = require('./controllers/PlanetaController');

routes.get('/', PlanetaController.listar);
routes.post('/', PlanetaController.adicionar);
routes.get('/nome/:nome', PlanetaController.buscarPorNome);
routes.get('/id/:id', PlanetaController.buscarPorId);
routes.delete('/id/:id', PlanetaController.remover);

module.exports = routes