const express = require('express');
const db = require('../../database/');

const router = express.Router();

router.get('/', (req, res) => {
  db.findAll('chores')
    .then(queryResult => res.send(queryResult))
    .catch((err) => {
      console.error(`[error] get chores: ${err}`);
    });
});

router.post('/', (req, res) => {
  db.addChore(req.body.name)
    .then((dbResponse) => {
      res.json({ choreId: dbResponse.insertId });
    })
    .catch((err) => {
      console.error(`[error] post chore ${req.body.name}: ${err}`);
    });
});

router.put('/:choreId', (req, res) => {
  db.editChore(req.params.choreId, req.body.name)
    .then(res.send(`PUT choreId ${req.params.choreId} success!`))
    .catch((err) => {
      console.error(`[error] put chore ${req.parmas.choreId}: ${err}`);
    });
});

router.delete('/:choreId', (req, res) => {
  db.deleteChore(req.params.choreId)
    .then(res.send(`DELETED choreId ${req.params.choreId} success!`))
    .catch((err) => {
      console.error(`[error] delete chore ${req.body.name}: ${err}`);
    });
});

module.exports = router;
