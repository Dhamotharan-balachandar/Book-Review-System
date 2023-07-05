var express = require("express");
var app = express();
var port = 1000;
const bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.get("/",(req,res)=>{
    res.sendFile("C:/Users/Damotharan/Desktop/web_programming/try/project/home.html")
})
app.listen(port, () => {
    console.log("Server listening on port " + port);
});