const express = require('express'),
      path = require('path'),
      exphbs = require('express-handlebars'),
      port = 3000,
      app = express();

// Configurar Handlerbar para express
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: 'hbs',
  layoutDir: path.join(__dirname, 'views/layouts')

}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Route 1
app.get('/', (req, resp) =>{
  resp.render('home', {
    name: 'Rancel'
  });
});

// Server listening...
app.listen(port, (err) => {
      if (err) {
            return console.log('Algun error inesperado ha ocurrido...', err)
      }
      console.log(`El Servidor esta escuchando por el puerto: ${port}`);
});
