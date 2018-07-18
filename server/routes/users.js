const express = require('express');
const { addUser, editUser, deleteUser } = require('../../database/');
const fetchAllUsersFromDB = require('../../database/').findAll;

const router = express.Router();

router.get('/', (req, res) => {
  fetchAllUsersFromDB('users')
    .then(rows => res.status(200).json(rows))
    .catch(err => console.error(`[error] GET users ${err}`));
});

router.post('/', (req, res) => {
  addUser(req.body.name)
    .then(success => res.status(201).json({ newUserId: success.insertId }))
    .catch(err => console.error(`[error] POST users ${err}`));
});

router.put('/:userId', (req, res) => {
  editUser(req.params.userId, req.body.name)
    .then(res.status(200).send())
    .catch(err => console.error(`[error] PUT user ${req.params.userId} --> ${err}`));
});

router.delete('/:userId', (req, res) => {
  deleteUser(req.params.userId)
    .then(res.status(200).send())
    .catch(err => console.error(`[error] DELETE user ${req.params.userId} --> ${err}`));
});

module.exports = router;
