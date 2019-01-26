import express from "express";
import morgan from "morgan";  // for logging
import helmet from "helmet";  // for secure
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send("Hello my ass");
const handlePrifile = (req, res) => res.send("Hello profile");


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.get("/", handleHome);
app.get("/profile", handlePrifile);
app.use("/user", userRouter);

export default app;