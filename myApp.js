let express = require('express');
let app = express();
console.log('Hello World')

app.get('/', (req, res) => { res.sendfile(__dirname + '/views/index.html') })




































 module.exports = app;
