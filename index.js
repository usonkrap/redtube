import express from "express";
const app = express();

const PORT = "4000";

const handleListening = () => console.log(`Listen on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello my ass");
const handlePrifile = (req, res) => res.send("Hello profile");

const betweenMid = (req, res, next) => {
  console.log("between");
  next();
}

app.use(betweenMid);

app.get("/", handleHome)
// app.get("/",betweenMid, handleHome)

app.get("/profile", handlePrifile)

app.listen(PORT, handleListening);

// app.get('/', function (req, res) {
//   res.send('hello world')
// })