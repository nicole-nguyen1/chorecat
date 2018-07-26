const express = require('express');
const { completeChore } = require('../../database');
const fetchAllCompletedChores = require('../../database').findAll;

const router = express.Router();

router.get('/', (req, res) => {
  fetchAllCompletedChores('completedChores')
    .then(rows => res.status(200).json(rows))
    .catch(err => console.error(`[error ID 61] GET calendar ${err}`));
});

// Using UTC day of week
router.post('/', (req, res) => {
  const { choreId, userId, day } = req.body;
  if (day < 0 || day > 6) {
    res.status(400).send('[error] expecting key:value pair for key "day" to have a "value" 0 - 6');
  } else {
    completeChore(userId, choreId, day)
      .then(res.status(201).send())
      .catch(err => console.error(`[error ID 62] POST calendar ${err}`));
  }
});

module.exports = router;
