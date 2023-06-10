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

app.listen(3000, () => {
  console.log("listening");
});
