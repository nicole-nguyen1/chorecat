const express = require('express');
const router = express.Router();
const db = require('../../database')

router.get('/', (req, res) => {
  // Run get all users DB helper method as a promise, then res.send
  res.json('GET to /calendar... Mock calendar data goes here...');
});

router.post('/', (req, res) => {
  // Run get all users DB helper method as a promise, then res.send
  console.log(req.body.nameID)
  db.completeChore(req.body.nameID, req.body.choreID, 'Saturday').then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})
  res.json('POST to /calendar... Mock calendar data goes here...');
});

module.exports = router;
