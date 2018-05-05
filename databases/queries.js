var promise = require('bluebird');
const pg = require('pg');
const keys = require('../envs/keys.js');

// Initialization settings for pg-promise
var options = {
  promiseLib: promise
};
// conect to the database 
var pgp = require('pg-promise')(options);

const dbConnection = {
  host: keys.host,
  port: keys.port,
  database: keys.database,
  user: keys.user,
  password: keys.password
};

var db = pgp(dbConnection);

// query functions
module.exports = {
  getAllPets: getAllPets,
  // getPetById: getPetById,
  // createPet: createPet,
};

function getAllPets(req, res, next) {
  db.any('select * from pets')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'all pets retrieved'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}