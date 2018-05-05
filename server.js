const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3000
const app = express();
var db = require('./databases/queries.js');


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send("hello world"))
  // route handlers for server's REST API
  .get('/api/pets', db.getAllPets)
  .get('/api/pets/:id', db.getPetById)
  // .post('/api/puppies', db.createPet)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`)
)



