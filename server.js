const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

var bodyParser = require("body-parser");
var db = require("./databases/queries.js");
var app = express();

//Middleware: Allows cross-domain requests (CORS)
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => res.send("hello world"));
// route handlers for server's REST API
app.get("/api/pets", db.getAllPets);
app.get("/api/pets/:id", db.getPetById);
app.post("/api/pets", db.createPet);

// DEV error handler - print out the stack trace
// PROD error handler - remove stack traces
app.get("env") === "development"
    ? app.use((err, req, res, next) => {
          res.status(err.code || 500).json({
              status: "error",
              message: err,
          });
      })
    : app.use((err, req, res, next) => {
          res.status(err.status || 500).json({
              status: "error",
              message: err.message,
          });
      });
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
