const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios");

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false })); //parse incoming form data in req.body
app.use(express.json()); //parse incoming json data

app.set("view engine", "ejs");
app.set("views", "src/views");

app.get("/check", (req, res, next) => {
  res.json({ msg: "Health Check" });
});

app.get("/", (req, res, next) => {
  // res.sendFile(path/to/our/index.html)
  res.render("homepage", { title: "Homepage" });
});

app.post("/login", (req, res, next) => {
  const { name, password } = req.body;

  if (name === "admin" && password === "admin") {
    // res.redirect('/admin')
    res.render("success", {
      title: `Welcome, ${name}`,
      username: "",
      name: "Jumpei's homepage"
    });
  } else {
    res.render("failure", { title: "Opps!" });
  }
});

app.get("/repos", async (req, res, next) => {
  const username = req.query.username;

  try {
    const result = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

    const repos = result.data.map((repo) => ({
      name: repo.name,
      url: repo.html_url,
      description: repo.description
    }));

    res.render("repos", { title: "Repos", repos });
  } catch (error) {
    res.status(400).render("failure", { title: "Opps!" });
  }

  // res.json({ result: JSON.stringify(result) })
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
