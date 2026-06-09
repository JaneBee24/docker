const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8000;

mongoose.connect('mongodb://mongo:27017/test');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});