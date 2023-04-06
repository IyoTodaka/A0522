require("dotenv").config()
const path = require("path");
const express = require("express");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", "src/views");

const oneDay = 24 * 60 * 60 * 1000;
app.use(
  sessions({
    secret: process.env.SECRET_KEY,
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: oneDay }
  })
);


//pretend this is a database
let session;

app.get("/", (req, res) => {
  session = req.session;
  if (session.userid) {
    res.send(`Welcome ${session.userid}!<br> <a href="/logout">Logout</a>`);
  } else {
    res.render("index");
  }
});

app.post("/user", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    session = req.session
    session.userid = username;
  
    res.send(`Welcome ${username}!<br> <a href="/logout">Logout</a>`);
  } else {
    res.send("Wrong username or password");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.listen(8080);
