const router = require("express").Router();

const {
  getAllBooks,
  getCreateBook,
  postCreateBook,
  getEditBookById,
  postEditBookById,
  deleteBook
} = require("../controller/books.controller");

router.get("/all", getAllBooks);
router.get("/edit/:id", getEditBookById);
router.post("/edit/:id", postEditBookById);
router.get("/create", getCreateBook);
router.post("/create", postCreateBook);
router.delete("/delete/:id", deleteBook);

module.exports = router;
