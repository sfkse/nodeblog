const exphbs = require('express-handlebars');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const hostname = '127.0.0.1';

app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/nodeblog_db');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const main = require('./routes/main');

app.use('/', main);

app.listen(port, hostname, () => {
  console.log(`Server is running, http://${hostname}:${port}/`);
});
