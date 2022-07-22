const exphbs = require('express-handlebars');
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const generateDate = require('./helpers/generateDate').generateDate;
const app = express();
const port = 3000;
const hostname = '127.0.0.1';


mongoose.connect('mongodb://127.0.0.1:27017/nodeblog_db');

app.use(express.static('public'));

app.use(fileUpload());


app.engine('handlebars', exphbs.engine({helpers: {generateDate: generateDate}}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const main = require('./routes/main');
const posts = require('./routes/posts');

app.use('/', main);
app.use('/posts', posts);

app.listen(port, hostname, () => {
  console.log(`Server is running, http://${hostname}:${port}/`);
});
