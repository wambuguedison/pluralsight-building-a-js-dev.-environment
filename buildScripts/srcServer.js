const express = require('../node_modules/express');
const path = require('path');
const open = require('../node_modules/open');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
