const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();
const port = process.env.PORT || 3000;

// define paths
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//setup static path
app.use(express.static(publicDirectoryPath));

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Coz'
  });
});

app.get('/help', (req, res) => { 
  res.render('help', {
    title: 'Help',
    message: 'Sample help message',
    name: 'Coz'
  });
});

app.get('', (req, res) => { 
  res.render('index', {
    title: 'Weather App',
    name: 'Coz'
  });
});

app.get('/', (req, res) => { 
  res.send('<h1>Hello express</h1>');
});

app.get('/weather', (req, res) => { 
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address'
    });    
  }
  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => { 
      if (error !== undefined) {
        return res.send({ error })
      }
      forecast(latitude, longitude, (error, forecastData) => {
        if (error !== undefined) {
          return console.log('Error', error)  
        }
        res.send({
          forecast: forecastData,
          location,
          address: req.query.address
        });
      })  
    });
});

app.get('/products', (req, res) => { 
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
    });
  }
  console.log(req.query.search);
  res.send({
    products: []
  });
});

app.get('/help/*', (req, res) => { 
  res.render('404', {
    title: '404',
    errorMessage: 'help article not found.',
    name: 'Coz'    
  });
});

app.get('*', (req, res) => { 
  res.render('404', {
    title: '404',
    errorMessage: 'oops...page not found.',
    name: 'Coz'
  });
});

app.listen(port, () => {
  console.log('server is up on port 3000.');
});


