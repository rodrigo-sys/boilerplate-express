require('dotenv').config();
let express = require('express');
let app = express();

app.use((req, res, next) => { 
  console.log(`${req.method} ${req.path} - ${req.ip}`) 
  next()
});

app.use('/public', express.static(__dirname + '/public'));
app.get('/', (req, res) => { res.sendFile(__dirname + '/views/index.html') })

app.get('/json', (req, res) => {
  message = "Hello json"

  if(process.env.MESSAGE_STYLE == 'uppercase'){ 
    message = message.toUpperCase() 
  }

  res.json({message})
});

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.send({time: req.time});
})

module.exports = app;
