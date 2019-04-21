const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '../public')));

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Coz'
  });
});

app.get('/help', (req, res) => { 
  res.render('help', {
    title: 'Help',
    message: 'Sample help message'
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


