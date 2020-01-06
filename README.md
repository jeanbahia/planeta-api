# planeta-api
API responsável por permitir o cadastramento de planetas e dizer a quantidade de vezes que os mesmos apareceram na saga Star Wars.

## Tecnologias Utilizadas
- NodeJs
  - express
  - mocha
  - chai
  - chai-http
  - mongoose
- MongoDB

## Scripts para execução da API
  - Testes unitários: **npm test**
  - Iniciar a aplicação: **npm start**
  
## Rotas cadastradas
 Rota: ***localhost:3000/starwars/planetas/***<br/>
 Metodo: **POST**<br/>
 Descrição: Permite cadastrar um novo planeta, desde que não exista nenhum outro com o mesmo nome cadastrado na base.<br/>

 Rota: ***localhost:3000/starwars/planetas/***<br/>
 Metodo: **GET**<br/>
 Descrição: Realiza a listagem de todos os planetas cadastrados na base de dados<br/>

 Rota: ***localhost:3000/starwars/planetas/nome/*** **{NOME_DO_PLANETA}**<br/>
 Metodo: **GET**<br/>
 Descrição: Busca o planeta cadastrado na base de dados, caso exista algum com o nome passado por parâmetro.<br/>

 Rota: ***localhost:3000/starwars/planetas/id/*** **{ID_DO_PLANETA}**<br/>
 Metodo: **GET**<br/>
 Descrição: Busca o planeta cadastrado na base de dados, caso exista algum com o ID passado por parâmetro.<br/>

 Rota: ***localhost:3000/starwars/planetas/id/*** **{ID_DO_PLANETA}**<br/>
 Metodo: **DELETE**<br/>
 Descrição: Remove o planeta cadastrado cujo ID corresponda ao valor passado por parâmetro.<br/>
