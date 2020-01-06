const chai = require('chai')
const chaihttp = require('chai-http')
const app = require('../app');
const Planeta = require('../src/models/Planeta');

const should = chai.should();

chai.use(chaihttp);

describe('Planeta', () => {

    let id = '';
    const nomePlaneta = 'Dagobah';    
    
    it('Adicionando novo Planeta', (done) => {

        const planeta = {
            "nome": nomePlaneta,
            "clima": "Temperado",
            "terreno": "florestas, montanhas"
        }

        chai.request(app)
            .post('/starwars/planetas/')
            .send(planeta)
            .end((err, res) => {
                res.should.have.status(201);
                
                done();
            });       
    }).timeout(5000000);

    it('Listar Planetas', (done) => {

        chai.request(app)
            .get('/starwars/planetas/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });  
    });

    it('Buscar Planeta por nome', (done) => {

        chai.request(app)
            .get(`/starwars/planetas/nome/${nomePlaneta}`)
            .end((err, res) => {
                                
                res.should.have.status(200);
                res.body.should.have.property('nome').eq('Dagobah');
                res.body.should.have.property('clima').eq('Temperado');
                res.body.should.have.property('terreno').eq('florestas, montanhas');
                res.body.should.have.property('numAparicoes').eq(3);
                                
                id = res.body._id;

                done();
            });  
    });

    it('Buscar Planeta por ID', (done) => {
        
        chai.request(app)
        .get(`/starwars/planetas/id/${id}`)
        .end((err, res) => {

            res.should.have.status(200);
            res.body.should.have.property('nome').eq('Dagobah');
            res.body.should.have.property('clima').eq('Temperado');
            res.body.should.have.property('terreno').eq('florestas, montanhas');
            res.body.should.have.property('numAparicoes').eq(3);

            done();
        });
    });

    it('Remover Planeta', (done) => {

        chai.request(app)
            .delete(`/starwars/planetas/id/${id}`)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
})