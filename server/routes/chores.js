const express = require('express');
const router = express.Router();

const mockDataNote = '\n\nNote: JSON.stringify is being called on the data sent back to you.';

// Only need this while we are using mock data
const mockChores = require('../mock-data/mock-data.js').mockChores;

router.get('/', (req, res) => {
  // Run get all chores DB helper method as a promise, then res.send
  res.json(mockChores);
});

router.post('/', (req, res) => {
  // Run create chore DB helper method as a promise, then res.send
  res.send(`POST to /chores with the following body: ${JSON.stringify(req.body)}${mockDataNote}`);
});

router.put('/:choreId', (req, res) => {
  // Run create chore DB helper method as a promise, then res.send
  res.send(`PUT to /chores with the following body: ${JSON.stringify(req.parmas)}${mockDataNote}`);
});

router.delete('/:choreId', (req, res) => {
  res.send(`DELETE /chores with the following IDs: ${JSON.stringify(req.params)}${mockDataNote}`);
});

module.exports = router;