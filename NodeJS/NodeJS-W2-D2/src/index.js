require('dotenv').config();
const express = require("express");
const path = require("path");
const methodOverride = require('method-override');

const dbConnection = require("./util/mysql");

const booksRouter = require('./routers/books.router');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "src/views");

app.get("/", (req, res) => res.render("index"));
app.use("/books", booksRouter)

const PORT = process.env.PORT || 9000;
app.listen(PORT, async () => {
  console.log("Server started (http://localhost:3000/) !");

  const [data] = await dbConnection.query("SELECT 5") // { "1": 1 }
  if(data) console.log("Successful connection to the MySQL database!")
  
});