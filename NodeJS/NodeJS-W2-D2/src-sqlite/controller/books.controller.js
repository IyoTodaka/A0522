const Book = require("../model/book.model");

exports.getAllBooks =  (req, res) => {
  Book.find((data) => {
    if(data.status === 200){
        return res.render("books", { model: data.rows });
    }

    console.error(data.message)
  })
}

exports.getCreateBook = (req, res) => {
  res.render("create", { model: {} });
}

exports.postCreateBook = (req, res) => {
  const { Title, Author, Comments } = req.body;

  const newBook = new Book(Title, Author, Comments);
  newBook.save((data) => {
    if(data.status === 200){
        return res.redirect("/books/all");
    }

    console.error(data.message)
  })
}

exports.getEditBookById = (req, res) => {
  const id = req.params.id;
  Book.findById(id, (data) => {
    if(data.status === 200){
        return res.render("edit", { model: data.row });
    }
    console.error(data.message)
  })
}

exports.postEditBookById = (req, res) => {
  const id = req.params.id;

  const { Title, Author, Comments } = req.body;

  const dataToUpdate = { id, Title, Author, Comments }

  Book.updateOne(dataToUpdate, (data) => {
    if(data.status === 200){
        return res.redirect("/books/all");
    }
    console.error(data.message)
  })
}

exports.deleteBook = (req, res) => {
  const id = req.params.id;

  Book.deleteOne(id, (data) => {
    if(data.status === 200){
        return res.redirect("/books/all");
    }
    console.error(data.message)
  })
}