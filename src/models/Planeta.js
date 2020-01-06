const mongoose = require('mongoose');

const PlanetaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true,
    },
    clima: {
        type: String,
        required: true
    },
    terreno: {
        type: String,
        required: true
    },
    numAparicoes: {
        type: Number,
        default: 0
    }
});

mongoose.model("Planeta", PlanetaSchema);