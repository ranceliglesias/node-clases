const express = require('express'),
      path = require('path'),
      rp = require('request-promise');
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
app.get('/:city', (req, res) =>{
  rp({
    uri: 'http://dataservice.accuweather.com/locations/v1/search',
    qs: {
      q: req.params.city,
      apikey: '9nGifqlQ5goAFBTonPiAtTY3FhFxHGKy'
    },
    json: true
  })
  .then((data) => {
    res.render('home', data)
  })
  .catch((err) => {
    console.warn(err);
    res.render('An error ocurred');
  })

});

// Server listening...
app.listen(port, (err) => {
      if (err) {
            return console.log('Algun error inesperado ha ocurrido...', err)
      }
      console.log(`El Servidor esta escuchando por el puerto: ${port}`);
});
