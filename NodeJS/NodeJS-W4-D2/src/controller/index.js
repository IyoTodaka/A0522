const Todo = require("../model/Todo");

exports.getTodos = async (req, res) => {
  const todosList = await Todo.getTodos();
  res.render("index", { model: todosList });
};

exports.getCreateTodo = (req, res) => {
  res.render("create", { model: {} });
};

exports.postTodo = async (req, res) => {
  try {
    const newTodo = new Todo(req.body.Title);
    const { acknowledged } = await newTodo.save();

    if (!acknowledged) {
      throw new Error("Write permission denied");
    }

    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
};
