const router = require("express").Router();
const { mongoConnect } = require("../services/mongo");

const db = mongoConnect()

router.get("/", async (req, res) => {
  const fetchedTodosArray = await db.collection("todos").find().toArray();

  const reMappedFetchedTodos = fetchedTodosArray.map(item => ({ ID: item._id, ...item }))
  console.log(reMappedFetchedTodos);
  res.render("index", { model: reMappedFetchedTodos });
});

// router.get("/", async (req, res) => {
//   const db = await mongoConnect();
//   const fetchedTodosArray = await db.collection("todos").find().toArray();

//   const reMappedFetchedTodos = fetchedTodosArray.map(item => ({ ID: item._id, ...item }))
//   console.log(reMappedFetchedTodos);
//   res.render("index", { model: reMappedFetchedTodos });
// });


router.get("/create", (req, res) => {
  res.render("create", { model: {} });
});


router.post("/create", async (req, res) => {
  try {
    const db = await mongoConnect();
    const result = await db
      .collection("todos")
      .insertOne({ Title: req.body.Title });
    console.log(result);
    res.redirect("/");
  } catch (error) {
    console.error(error)
  }
});

module.exports = router;
