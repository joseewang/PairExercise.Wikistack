const express = require('express');
const morgan = require('morgan');
const layout = require("./views/layout");
const main = require("./views/main");
const { db, Page, User } = require('./models');


const app = express();

app.use('/wiki', require('./routes/wiki'));
// app.use('/users', require('./routes/users'));

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.get('/', (req, res, next) => {
  res.send(layout(''));
});

const PORT = 3000;


const init = async () => {
  await db.sync({force: true});

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

init();