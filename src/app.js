const express = require('express');

const app = express();

app.get('/', (req, res) => { 
  res.send('<h1>Hello express</h1>');
});

app.get('/help', (req, res) => { 
  res.send(
    [{
      name: 'Coz',
      age: 50
    }, {
      name: 'Brenna',
      age: 21
  }]);
});

app.get('/about', (req, res) => { 
  res.send('<h1>About</h1>');
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


