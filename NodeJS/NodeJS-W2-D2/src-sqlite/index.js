const express = require("express");
const path = require("path");
const methodOverride = require('method-override')

const booksRouter = require('./routers/books.router');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "src/views");

app.get("/", (req, res) => res.render("index"));
app.use("/books", booksRouter)

app.listen(3000, () => {
  console.log("Server started (http://localhost:3000/) !");
});