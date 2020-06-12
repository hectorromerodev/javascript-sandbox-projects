const express = require('express');

const app = express();

const resHanlder = require('./response-handler');
const resHandler = require('./response-handler');


app.get('/', resHandler);

app.listen(3100);


