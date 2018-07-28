// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

let reservations = [
    {
        customerName: "David",
        customerPhoneNumber: 7134529123,
        customerEmail: "fake@email.com",
        customerUniqueId: "testing"
    }
]

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/reservation", function(req, res) {
  return res.json(reservations);
});
  
//   app.get("/api/tables", function(req, res) {
//     return res.json(reservations);
//   });

app.post("/api/reservation", function (req, res) {
    reservations.push(req.body);
    // console.log(reservations);
    res.send();
})

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});