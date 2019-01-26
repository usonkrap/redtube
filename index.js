import express from "express";
const app = express();

const PORT = "4000";

const handleListening = () => console.log(`Listen on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello my ass");
const handlePrifile = (req, res) => res.send("Hello profile");


app.get("/", handleHome)
app.get("/profile", handlePrifile)

app.listen(PORT, handleListening);

// app.get('/', function (req, res) {
//   res.send('hello world')
// })