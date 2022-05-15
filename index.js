const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/html/circle.html");
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/html//triangle.html");
});

app.post("/triangle", (req, res) => {
  const base = req.body.base;
  const height = req.body.height;

  const area = 0.5 * base * height;

  res.send(`<h2>area of Triangle is :: ${area}</h2>`);
});

app.post("/circle", (req, res) => {
  const radius = req.body.radius;

  const area = Math.PI * radius * radius;

  res.send(`<h1>Area of Circle is :: ${area}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Your server is running at http://localhost:${PORT}`);
});
