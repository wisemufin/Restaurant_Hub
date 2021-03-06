var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var reservations = [
    {
        name: "Mary",
        phoneNumber: "siasdfasdf",
        email: "asdfasdf",
        uniqueID: "asdSdf"
    }
];
var waitlist = [
    {
    name: "Mary",
    phoneNumber: "siasdfasdf",
    email: "asdfasdf",
    uniqueID: "asdSdf"
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

app.get("/api/waitlist", function(req, res){
    return res.json(waitlist);
})


if(reservations.length <= 5){
app.post("/api/tables", function(req, res) {
  var newReservation = req.body;
  console.log(newReservation);
  reservations.push(newReservation);
  res.json(newReservation);
});
}
else {
app.post("/api/waitlist", function(req, res){
    var newReservation = req.body; 
    console.log("Waitlist:" + newReservation);
    waitlist.push(newReservation);
    res.json(newReservation);
})
}
// Starts the server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
