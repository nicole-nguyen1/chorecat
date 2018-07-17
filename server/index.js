const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // path is used to join image file names with __dirname
const port = process.env.PORT || 3000; // Grab env variable if present, otherwise use port 3000
const app = express();
// Setup router
const users = require('./routes/users');
const chores = require('./routes/chores');
const calendar = require('./routes/calendar');
// Used in users and chores flies to serve mock data note

app.use(bodyParser.json()); // Expect body to always be JSON
app.use('/users', users); // Setup route
app.use('/chores', chores); // Setup route
app.use('/calendar', calendar); // Setup route

// ROOT Route
// Currently serves a melon cat!
app.get('/', (req, res) => {
  const melonCat = path.join(__dirname, '../client/dist/images/melon-cat.jpg');
  res.sendFile(melonCat);
});

// Catch all routes (for all verbs) we aren't expecting and server a feline 404
app.all('/*', (req, res) => {
  const feline404 = path.join(__dirname, '../client/dist/images/feline404.svg');  
  res.status(404).sendFile(feline404);
});

// Handle any error that comes up and let the client know we bombed
app.use((err, req, res, next) => {
  console.error(`[server] 500: ${err.stack}`);
  res.status(500).send('Something broke!');
});

// Start listening on PORT
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});