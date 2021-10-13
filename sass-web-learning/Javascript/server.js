const express = require('express');
var app = express();

const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

var ingridients = [
  {
    "id":"232kAk",
    "text":"Eggs"
  },
  {
    "id":"dkP435",
    "text":"Milk"
  },
  {
    "id":"dkcuu7",
    "text":"Hamburger"
  }
];

app.get('/ingredients', function(req, res){
  res.send(ingridients);
});

app.post('/', function(req, res){
  var ingredient = req.body;
  if (!ingredient || ingredient.text == "") {
    res.status(500).send({error: "Your ingredient must have text"});
  } else {
    ingridients.push(ingredient);
    res.status(200).send(ingridients);
  }
});

app.put('/ingredients/:ingredientId', function(req, res){
  var ingText = req.body.text;

  if (!ingText || ingText === "") {
    res.status(500).send({error:"You must provide ingredient text"});
  } else {
    for (var i = 0; i < ingridients.length; i++) {
      var ing = ingridients[i];
      if (ing.id === req.params.ingredientId) {
        ingridients[i].text = ingText;
        break;
      }
    }
    res.send(ingridients);
  }
});


app.listen(3000, function(){
  console.log("firts API Running on port 3000!");
});
