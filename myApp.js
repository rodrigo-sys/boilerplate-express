require('dotenv').config();
let express = require('express');
let app = express();

app.get('/', (req, res) => { res.sendFile(__dirname + '/views/index.html') })
app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
  message = "Hello json"
  message = process.env.MESSAGE_STYLE == 'uppercase' ? message.toUpperCase() : message;

  res.json({message})
});



































module.exports = app;
