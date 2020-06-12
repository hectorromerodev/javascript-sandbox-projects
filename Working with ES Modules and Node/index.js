// const express = require('express');
import express from 'express';

const app = express();

// const resHanlder = require('./response-handler');
import {resHandler} from './response-handler.js';


app.get('/', resHandler);

app.listen(3100);


