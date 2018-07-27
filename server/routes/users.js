const express = require('express');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const { addUser, editUser, deleteUser } = require('../../database/');
const fetchAllUsersFromDB = require('../../database/').findAll;

const router = express.Router();

router.get('/', (req, res) => {
  fetchAllUsersFromDB('users')
    .then((userObjects) => {
      const users = userObjects.map((user) => {
        const cleanUser = {};
        Object.assign(cleanUser, user);
        delete cleanUser.password;
        return cleanUser;
      });
      res.status(200).json(users);
    })
    .catch(err => console.error(`[error ID 41] GET users ${err}`));
});

router.post('/', (req, res) => {
  bcrypt.hash(req.body.pw, saltRounds)
    .then(hashedPW => addUser(req.body.name, hashedPW))
    .then(newUserObject => res.status(201).json({ newUserId: newUserObject.insertId }))
    .catch(err => console.error(`[error ID 42] POST users ${err}`));
});

router.put('/:userId', (req, res) => {
  editUser(req.params.userId, req.body.name)
    .then(res.status(200).send())
    .catch(err => console.error(`[error ID 43] PUT user ${req.params.userId} --> ${err}`));
});

router.delete('/:userId', (req, res) => {
  deleteUser(req.params.userId)
    .then(res.status(200).send())
    .catch(err => console.error(`[error ID 44] DELETE user ${req.params.userId} --> ${err}`));
});

module.exports = router;
