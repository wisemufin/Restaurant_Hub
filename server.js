var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var reservations = [
  {
    routeName: "",
    name: "Mary",
    phoneNumber: "123-456-7890",
    email: "somebody@gmail.com",
    uniqueID: "1"
  }
];

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Reserve
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Tables
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});

app.post("/api/tables", function(req, res) {
  var reservations = req.body;
  console.log(reservations);
});

// Starts the server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
