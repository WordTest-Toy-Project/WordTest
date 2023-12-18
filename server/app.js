const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/db');
const routes = require('./routes');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 9000;
dotenv.config();
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', // 클라이언트의 주소로 변경
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(session({
  name : "session ID",
  secret: 'whoami',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure : false,
    httpOnly : false,
    maxAge: 1000 * 60 * 60 * 24,
  },
}));

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
