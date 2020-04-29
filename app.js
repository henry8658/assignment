const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./build/routers/router'));

app.listen(3000, function () 
{
    console.log('listening on port 3000')
});