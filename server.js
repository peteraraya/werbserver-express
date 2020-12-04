const express = require('express');
const app = express(); // nos permite utilizar expreess

const hbs = require('hbs');
// Helpers
require('./hbs/helpers');

// Puerto heroku
const port = process.env.PORT || 3000;

// establecemos directorio publico
app.use(express.static(__dirname + '/public'));

// Express hbs
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
  // renderizar pagina
  res.render('home', {
    // Utilizar varibles
    nombre: 'pedrO aRaya',
  });
});

app.get('/about', (req, res) => {
  // renderizar pagina
  res.render('about');
});

app.listen(port, ()=>{
  console.log(`Escuchando peticiones en el puerto ${ port }`);
});
