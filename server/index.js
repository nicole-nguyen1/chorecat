const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // path is used to join image file names with __dirname
const users = require('./routes/users');
const chores = require('./routes/chores');
const calendar = require('./routes/calendar');

const port = process.env.PORT || 3000; // Grab env variable if present, otherwise use port 3000
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use(bodyParser.json()); // Expect body to always be JSON
app.use('/users', users); // Setup route
app.use('/chores', chores); // Setup route
app.use('/calendar', calendar); // Setup route

// Catch all routes (for all verbs) we aren't expecting and server a feline 404
app.all('/*', (req, res) => {
  const feline404 = path.join(__dirname, '../client/dist/images/feline404.svg');
  res.status(404).sendFile(feline404);
});

// Start listening on PORT
app.listen(port, () => {
  // console.log(`Server listening on port ${port}`);
});
