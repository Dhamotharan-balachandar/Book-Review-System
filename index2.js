var express = require("express");
var app = express();
var port = 4000;
const bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0/test/user_es");
var bookSchema = new mongoose.Schema({
    name: String,
    authorname:String,
    theme: String,
    review:String
});



var Book = mongoose.model("Book", bookSchema);

app.get("/addbook", (req, res) => {
    res.sendFile("C:/Users/Damotharan/Desktop/web_programming/try/project/add.html");
});
app.get("/addreview", (req, res) => {
    res.sendFile("C:/Users/Damotharan/Desktop/web_programming/try/project/review.html");
});

app.post("/addbook", (req, res) => {
    var myData = new Book(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});


app.post("/addreview", (req, res) => {
    var myData = new Book(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});





app.listen(port, () => {
    console.log("Server listening on port " + port);
});

