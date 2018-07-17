var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  socketPath: '/var/run/mysqld/mysqld.sock',
  database: 'chorecat'
});

connection.connect(function(err) {
  if (err) { throw err } else { console.log('connected') }
});

const addChore = (chore) =>
  new Promise((resolve, reject) => {
    connection.query(`INSERT INTO chores SET ?`, {name: chore}, (err, results) => {
      if (err) { reject(err) } else { resolve(results) }
    });
  })

const deleteChore = (chore) =>
  new Promise((resolve, reject) => {
    connection.query(`DELETE FROM chores WHERE ?`, {name: chore}, (err, results) => {
      if (err) { reject(err) } else { resolve(results) }
    })
  })

const editChore = (oldChore, newChore) =>
  new Promise((resolve, reject) => {
    connection.query(`UPDATE chores SET ? WHERE name= ?`, [{name: newChore}, {name: oldChore}], (err, results) => {
      if (err) { reject(err) } else { resolve(results) }
    })
  })

const addUser = (user) =>
  new Promise((resolve, reject) => {
    connection.query(`INSERT INTO users SET ?`, {name: user}, (err, results) => {
      if (err) { reject(err) } else { resolve(results) }
    })
  })

const deleteUser = (user) =>
  new Promise((resolve, reject) => {
    connection.query(`DELETE FROM users WHERE ?`, {name: user}, (err, results) => {
      if (err) { reject(err) } else { resolve(results) }
    })
  })

const editUser = (user) =>
  new Promise((resolve, reject) => {
    connection.query(`UPDATE users SET ? WHERE name = ?`, [{name: newUser}, {name: oldUser}], (err, results) => {
      if (err) { reject(err) } else { resolve(results) }
    })
  })

const completeChore = (user, chore, day) =>
  new Promise((resolve, reject) => {
    connection.query(`INSERT INTO completedChores (user_id, chore_id, day) VALUES ((SELECT ID from users WHERE name= ?), (SELECT ID from chores WHERE name= ?), ?)`, [user, chore, day], (err, results) => {
      if (err) { reject(err) } else { resolve(results) }
    })
  })

const findAll = (table) =>
  new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} `, (err, results) => {
      if (err) { reject(err) } else { resolve(results) }
    })
  })


module.exports.addChore = addChore;
module.exports.editChore = editChore;
module.exports.deleteChore = deleteChore;
module.exports.addUser = addUser;
module.exports.editUser = editUser;
module.exports.deleteUser = deleteUser;
module.exports.completeChore = completeChore;
module.exports.findAll = findAll;
//Consider deleting a user and how that might affect list table
//Have to consider how adding a chore, editing a chore, deleting a chore affects tables
//Have to consider how adding a user, editing a user, deleting a user affects tables
