const { mongoConnect } = require("../services/mongo");


module.exports = class Todo {
  constructor(Title) {
    this.Title = Title;
  }

  async save() {
    const db = await mongoConnect();
    return await db.collection("todos").insertOne(this);
  }

  static async getTodos() {
    const db = await mongoConnect();
    const fetchedTodosArray = await db.collection("todos").find().toArray();

    const reMappedFetchedTodos = fetchedTodosArray.map((item) => ({
      ID: item._id,
      ...item
    }));

    return reMappedFetchedTodos;
  }
};
