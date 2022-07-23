const exphbs = require('express-handlebars');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo');
const methodOverride = require('method-override')

const generateDate = require('./helpers/generateDate').generateDate;
const app = express();
const port = 3000;
const hostname = '127.0.0.1';

mongoose.connect('mongodb://127.0.0.1:27017/nodeblog_db');

app.use(
  expressSession({
    secret: 'testtest',
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/nodeblog_db' }),
  }),
);
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use(fileUpload());

app.engine('handlebars', exphbs.engine({ helpers: { generateDate: generateDate } }));
app.set('view engine', 'handlebars');
app.set('views', './views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Display Link Middleware
app.use((req, res, next) => {
  const { userId } = req.session;

  if (userId) {
    res.locals = {
      displayLink: true,
    };
  } else {
    res.locals = {
      displayLink: false,
    };
  }

  next()
});

const main = require('./routes/main');
const posts = require('./routes/posts');
const users = require('./routes/users');
const admin = require('./routes/admin/index');

app.use('/', main);
app.use('/posts', posts);
app.use('/users', users);
app.use('/admin', admin);

app.listen(port, hostname, () => {
  console.log(`Server is running, http://${hostname}:${port}/`);
});
