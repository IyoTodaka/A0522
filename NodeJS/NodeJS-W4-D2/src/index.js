const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

require('./services/mongoose-playground')

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", require('./routes/index'));

app.listen(process.env.PORT || 8080, () => {
  console.log("Server has started...");
});


