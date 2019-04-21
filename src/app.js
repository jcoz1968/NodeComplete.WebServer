const path = require('path');
const express = require('express');

const app = express();
app.use(express.static(path.join(__dirname, '../public')));

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


