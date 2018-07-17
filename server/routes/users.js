const express = require('express');
const router = express.Router();

const mockDataNote = '\n\nNote: JSON.stringify is being called on the data sent back to you.';

// Only need this while we are using mock data
const mockUsers = require('../mock-data/mock-data.js').mockUsers;

router.get('/', (req, res) => {
  // Run get all users DB helper method as a promise, then res.send
  res.json(mockUsers);
});

router.post('/', (req, res) => {
  // Run create user DB helper method as a promise, then res.send
  res.send(`POST to /users with the following body: ${JSON.stringify(req.body)}${mockDataNote}`);
});

router.put('/:userId', (req, res) => {
  // Run create chore DB helper method as a promise, then res.send
  res.send(`PUT to /users with the following body: ${JSON.stringify(req.params)}${mockDataNote}`);
});

router.delete('/:userId', (req, res) => {
  res.send(`DELETE /users with the following IDs: ${JSON.stringify(req.params)}${mockDataNote}`);
});

module.exports = router;