require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser')
let app = express();

app.use(bodyParser.urlenconded({extended: false}))

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

app.get('/:word/echo', (req, res) => {
  res.send({echo: req.params.word})
})

// app.get('/name', (req, res) => {
//   let { first, last } = req.query
//   res.json({name: `${first} ${last}`});
// });

app.route('/name')
  .get((req, res) => {
    let { first, last } = req.query
    res.json({name: `${first} ${last}`});
  })


module.exports = app;
