const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Run get all users DB helper method as a promise, then res.send
  res.json('GET to /calendar... Mock calendar data goes here...');
});

router.post('/', (req, res) => {
  // Run get all users DB helper method as a promise, then res.send
  res.json('POST to /calendar... Mock calendar data goes here...');
});

module.exports = router;