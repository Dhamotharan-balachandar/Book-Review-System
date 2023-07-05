const express = require('express'); 
const app = express(); 
app.get('/add/:num1/:num2', (req, res) => { 
const num1 = parseInt(req.params.num1); 
const num2 = parseInt(req.params.num2); 
const result = num1 + num2; 
res.json({ result }); 
}); 
app.get('/subtract/:num1/:num2', (req, res) => { 
const num1 = parseInt(req.params.num1); 
const num2 = parseInt(req.params.num2); 
const result = num1 - num2; 
res.json({ result }); 
}); 
app.get('/multiply/:num1/:num2', (req, res) => { const num1 = parseInt(req.params.num1); 
const num2 = parseInt(req.params.num2); 
const result = num1 * num2; 
res.json({ result }); 
}); 
app.listen(3000, () => { 
console.log('Calculator API is running on port 3000'); 
});
