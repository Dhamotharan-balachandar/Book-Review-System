var express = require("express");
var app = express();
var port = 5000;
const bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.set('view engine','ejs')

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0/test/books");
var bookSchema = new mongoose.Schema({
    name: String,
    authorname:String,
    theme: String,
    review:String
});



var Book = mongoose.model("Book", bookSchema);

app.get("/search", (req, res) => {
    res.sendFile("C:/Users/Damotharan/Desktop/web_programming/try/project/search.html");
});

app.post("/author", async (req,res)=>{
    const {authorname} = req.body;
    try {
        const book = await Book.find({ authorname:req.body.authorname });
        if (!book) {
          return res.status(401).send('No Books found');
        }
        
        res.render('book',{'book':book});
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }

})
app.post("/theme", async (req,res)=>{
  const {theme} = req.body;
  try {
      const book = await Book.find({ theme:req.body.theme });
      if (!book) {
        return res.status(401).send('No Books found');
      }
      
      res.render('book',{'book':book});
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
})

app.listen(port, () => {
    console.log("Server listening on port " + port);
});