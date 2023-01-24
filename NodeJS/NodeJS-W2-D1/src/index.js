const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const bodyParser = require("body-parser")

const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

const db_name = path.join(__dirname, "data", "testapp.db");
const db = new sqlite3.Database(db_name, (err) => {
  if (err) console.error(err.message);

  console.log("Connected to the database.");
});


const seedDB = () => {
    db.serialize(() => {
        //testing purposes only, dont do in production!!!
        db.run("DROP TABLE IF EXISTS Books");
        db.run(
            "CREATE TABLE Books (Book_ID INTEGER PRIMARY KEY AUTOINCREMENT, Title VARCHAR(100) NOT NULL, Author VARCHAR(100) NOT NULL, Comments TEXT)",
            (err)=>{
                if(err){
                    console.error(err.message)
                }
                console.log("Created books table.")
            }
        );
        db.run(
            "INSERT INTO books (Title, Author, Comments) VALUES ('How To Eat', 'Kui S. Hinbo', 'Absolutely salivating'), ('Does Your Cat Want to Murder You?', 'Dolly M. Scratches', 'Unexpectedly chilling'), ('Dame da', 'Ai Gibu-up', 'Who cut the onions?');",
            (err) => {
                if (err) {
                return console.error(err.message);
                }
                console.log("Successfully created 3 books");
            }
        );
    })
};

db.serialize(() => {
    const sql = "SELECT name FROM sqlite_master WHERE type = 'table' AND name='Books';"
    db.get(sql, (err, row) => {
        if(err){
            return console.error(err.message)
        }

        if(row === undefined){
            console.log("Table 'Books' does not exist!");
            seedDB();
        }else{
            console.log("Table 'Books' exists!");
        }
    })
})


//routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/books", (req, res) => {
  const sql_select_all_books = "SELECT * FROM Books ORDER BY Book_ID DESC";
  db.all(sql_select_all_books, (err, data) => {
    if(err){
        return console.log(err.message)
    }
    res.json(data);
  });
});

app.get("/books/:id", (req,res) => {
    const id = req.params.id
    const sql_select_book_by_id = "SELECT * FROM Books WHERE Book_ID = ?"
    db.get(sql_select_book_by_id, id, (err, data) => {
        if(err){
            return console.error(err.message)
        }
        res.json(data)
    })
})

app.post("/create", (req, res) => {
    const {title, author, comments} = req.body

    const sql_insert_book = "INSERT INTO Books (Title, Author, Comments) VALUES (?, ?, ?)"
    const params = [title, author, comments]
    db.run(sql_insert_book, params, (err) => {
        if(err){
            return console.error(err.message)
        }
        res.redirect("/books")
    })
})



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
