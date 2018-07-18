const express = require('express');
const { completeChore } = require('../../database');
const fetchAllCompletedChores = require('../../database').findAll('completedChores');

const router = express.Router();

router.get('/', (req, res) => {
  fetchAllCompletedChores()
    .then(rows => res.status(200).json(rows))
    .catch(err => console.error(`[error] GET calendar ${err}`));
});

router.post('/', (req, res) => {
  const { choreId, userId, day } = req.body;
  completeChore(userId, choreId, day)
    .then(res.status(201).send())
    .catch(err => console.error(`[error] POST calendar ${err}`));
});

module.exports = router;
