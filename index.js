const express = require('express');
const app = express();

const PORT = "4000";

function handleListening() {
  console.log(`Listen on : http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("Hello home");
}
function handlePrifile(req, res) {
  res.send("Hello profile");
}


app.get("/", handleHome)
app.get("/profile", handlePrifile)

app.listen(PORT, handleListening);

// app.get('/', function (req, res) {
//   res.send('hello world')
// })