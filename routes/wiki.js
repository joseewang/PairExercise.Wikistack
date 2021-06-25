const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('got to get /wiki/');
});

router.post('/', (req, res, next) => {
  res.send('got to post /wiki/');
});

router.get('/add', (req, res, next) => {
  res.send('got to get /wiki/add');
});