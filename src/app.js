const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

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
  res.send({
    forecast: 'It is snowing',
    location: 'Oklahoma City'
  });
});

app.listen(3000, () => {
  console.log('server is up on port 3000.');
});


