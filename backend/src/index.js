const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
//Usa isso para ele entender que no body do post vai vir um JSON
app.use(express.json());
app.use(routes);

app.listen(3333);

