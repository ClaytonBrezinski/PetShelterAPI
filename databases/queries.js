var promise = require("bluebird");
const pg = require("pg");
const keys = require("../envs/keys.js");
var bodyParser = require("body-parser");

// Initialization settings for pg-promise
var options = {
    promiseLib: promise,
};
// conect to the database
var pgp = require("pg-promise")(options);
var db;
// if in prod, use heroku's URI to login
if (process.env.NODE_ENV === "production") {
    db = pgp(keys.url);
} else {
    var db = pgp({
        host: keys.host,
        port: keys.port,
        database: keys.database,
        user: keys.user,
        password: keys.password,
    });
}

// query functions
module.exports = {
    getAllPets: getAllPets,
    getPetById: getPetById,
    createPet: createPet,
};

function getAllPets(req, res, next) {
    db
        .any("select * from pets")
        .then(function(data) {
            res.status(200).json({
                status: "success",
                data: data,
                message: "all pets retrieved",
            });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getPetById(req, res, next) {
    var pupID = parseInt(req.params.id);
    db
        .one("select * from pets where id = $1", pupID)
        .then(function(data) {
            res.status(200).json({
                status: "success",
                data: data,
                message: "Retrieved a pet",
            });
        })
        .catch(function(err) {
            return next(err);
        });
}

function createPet(req, res, next) {
    req.body.lat = parseFloat(req.body.lat);
    req.body.long = parseFloat(req.body.long);
    db
        .one(
            "insert into pets(name, type, breed, location, lat, long)" +
                "values( ${name}, ${type}, ${breed}, ${location}, ${lat}, ${long}) RETURNING name, type",
            req.body
        )
        .then(function(data) {
            res.status(200).json({
                status: "success",
                message: `Inserted a pet with the name ${data.name} and type ${data.type}`,
            });
        })
        .catch(function(err) {
            return next(err);
        });
}
