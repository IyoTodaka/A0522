const db = require("../util/sqlite");

module.exports = class Book {
  constructor(Title, Author, Comments) {
    this.Title = Title;
    this.Author = Author;
    this.Comments = Comments;
  }

  save(callback) {
    const sql = "INSERT INTO Books (Title, Author, Comments) VALUES (?, ?, ?)";
    const params = [this.Title, this.Author, this.Comments];
    db.run(sql, params, (err) => {
      if (err) callback(err);
      callback({ status: 200 });
    });
  }

  static find(callback) {
    const sql = "SELECT * FROM Books ORDER BY Book_ID DESC";
    db.all(sql, [], (err, rows) => {
      if (err) callback(err);

      callback({ status: 200, rows });
    });
  }

  static findById(id, callback) {
    const sql = "SELECT * FROM Books WHERE Book_ID = ?";
    db.get(sql, id, (err, row) => {
      if (err) callback(err);

      callback({ status: 200, row });
    });
  }

  static updateOne(data, callback) {
    const sql =
      "UPDATE Books SET Title = ?, Author = ?, Comments = ? WHERE (Book_ID = ?)";
    const params = [data.Title, data.Author, data.Comments, data.id];
    db.run(sql, params, (err) => {
      if (err) callback(err);
      callback({ status: 200 });
    });
  }

  static deleteOne(id, callback) {
    const sql = "DELETE FROM Books WHERE Book_ID = ?";
    db.run(sql, id, (err) => {
      if (err) callback(err);
      callback({ status: 200 });
    });
  }
};
