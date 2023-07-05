var express = require("express");
var app = express();
var port = 3000;
const bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0/test/user_es");
var nameSchema = new mongoose.Schema({
    Username: String,
    email:String,
    password: String,

});



var User_e = mongoose.model("User_e", nameSchema);

app.get("/", (req, res) => {
    res.sendFile("C:/Users/Damotharan/Desktop/web_programming/try/project/register.html");
});

app.post("/addname", (req, res) => {
    var myData = new User_e(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});


app.get("/login",(req,res)=>{res.sendFile("C:/Users/Damotharan/Desktop/web_programming/try/project/login.html")})
app.post("/log", async (req, res) => {
    const { Username, password } = req.body;
  
    try {
      const user = await User_e.findOne({ Username:req.body.Username });
      console.log(user);
      if (!user) {
        // User not found
        return res.status(401).send('Invalid username');
      }
      if (password!=user.password) {
        // Invalid password
        return res.status(401).send('Invalid username or password');
      }
  
      // Login successful
      res.send('Login successful!');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  

app.listen(port, () => {
    console.log("Server listening on port " + port);
});