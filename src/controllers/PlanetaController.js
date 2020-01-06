const mongoose = require('mongoose');
const Planeta = mongoose.model('Planeta');
const PlanetaService = require('../service/PlanetaService');

module.exports = {

    async listar(req, res){
        const planetas = await Planeta.find();
        return res.json(planetas);
    },

    async buscarPorNome(req, res){
        const planeta = await Planeta.findOne({nome : req.params.nome});
        
        if(planeta === null){
            return res.status(204).send({error: 'Planeta não encontrado'});
        }

        return res.json(planeta);
    },

    async buscarPorId(req, res){
        const planeta = await Planeta.findById(req.params.id);

         if(planeta === null){
            return res.status(204).send({error: 'Planeta não encontrado'});
        }

        return res.json(planeta);
    },
    
    async adicionar(req, res){

        const planetaBuscado = await Planeta.findOne({nome: req.body.nome});

        if(planetaBuscado !== null){
            return res.status(400).send({error: 'Planeta já cadastrado!'});
        }

        const planeta1 = await PlanetaService.preencherAparicoesPlaneta(req.body);

        const planeta = await Planeta.create(planeta1);
        return res.status(201).send(planeta);
    },

    async remover(req, res){
        await Planeta.findByIdAndRemove(req.params.id);
        return res.json();
    }
}