const axios = require('axios');

module.exports = {

    async preencherAparicoesPlaneta(planeta){

        try{

            const retorno = await axios.get('https://swapi.co/api/planets/');

            const filtroNome = (planetaRetornado) => planetaRetornado.name === planeta.nome;
            
            const planetaEncontrado = retorno.data.results.filter(filtroNome);

            if(planetaEncontrado.length > 0){
                planeta.numAparicoes = planetaEncontrado[0].films.length;
            }

            return planeta;

        }catch(error){
            console.log(`Erro ao obter aparições do planeta ${planeta.nome}`);
            console.log(error);
        }
    }
}