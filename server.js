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

// Magic 8 Ball

app.get("/magic/:phrase", (req, res) => {
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
  res.send(`<h1>${phrase}? ${magic[randomIndex]} </h1>`);
});

// Take one Down and Pass it Around

// app.get("/", (req, res) => {
//   res.send(`
//     <h1>99 Bottles of beer on the walls</h1>
//     <a href="/98">take one down, pass it around</a>`);
// });

app.get("/:number_of_bottles", (req, res) => {
  const number_of_bottles = parseInt(req.params.number_of_bottles);

  let text = `
    <h1>${number_of_bottles} Bottles of beer on the wall</h1>
  `;

  if (number_of_bottles > 0) {
    const newLink = number_of_bottles - 1;
    text += `
      <a href="/${newLink}">take one down, pass it around</a>
    `;
  } else {
    text += `
    <a href="/"> Start Over</a>
  `;
  }
  res.send(text);
});

//Bonus
app.get("/", (ref, res) => {
  let bugs = 99;
  const randomNum = Math.floor(Math.random() * (500 - bugs + 1)) + bugs;
  let bugsText = `
  <h1>${bugs} little bugs in the code</h1>
  <h1>${bugs} little bugs</h1>
  <h1>Take on down</h1>
  <h1>${bugs - 1} little bugs in the code</h1>
  <h1>${bugs - 1} little bugs</h1>
  <h1>Patch it around</h1>
    <h1>${randomNum} little bugs in the code</h1>
  `;
  res.send(bugsText);
});

app.listen(3000, () => {
  console.log("listening");
});
