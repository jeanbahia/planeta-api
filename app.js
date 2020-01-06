const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect(
    'mongodb://localhost:27017/planetaapi', 
    {useNewUrlParser: true,
    useUnifiedTopology: true}
);

require('./src/models/Planeta');
require('./src/service/PlanetaService');
app.use('/starwars/planetas', require('./src/routes'));

app.listen(3000);

module.exports = app;