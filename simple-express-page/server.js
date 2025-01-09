const express = require("express");
const path = require("path")
const app = express();

const port = 8008;

app.use(express.static(path.join(__dirname, 'public')));


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
  });

app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'aboutus.html'));
});

app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'contactus.html'));
});

app.listen(port, () => {
    console.log('The server is running!')
});