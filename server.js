const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3000
const app = express();

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send("hello world"))
  // will change this to: res.render('/dashboard'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



