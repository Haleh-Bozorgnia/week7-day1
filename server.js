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

app.get("/magic/:phrase",(req,res)=>{
  const phrase = req.params.phrase;
  const magic = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  magicLength = magic.length;
  console.log(magicLength);
  const randomIndex = Math.floor(Math.random() * magicLength);
  console.log(randomIndex);
  console.log(magic[randomIndex]);
  // const randomMagic = magic[randomIndex]
  // console.log(randomIndex)
  res.send(`<h1>${phrase}? ${magic[randomIndex]} </h1>`)
})

app.listen(3000, () => {
  console.log("listening");
});
