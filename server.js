const express = require("express");
const app = express();
//Greetings

app.get("/greeting", (req, res) => {
  res.send(`<h1>Hello,stranger</h1>`);
});

app.get("/greeting/:name", (req, res) => {
  const name = req.params.name;
  res.send(`<h1>Wow! Hello there,  ${name}<h1>`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = req.params.total;
  const tipPercentage = req.params.tipPercentage;
  const tips = (total * tipPercentage) / 100;
  res.send(`<h1>total ${tips}</h1>`);
});

app.listen(3000, () => {
  console.log("listening");
});
