const express = require("express")
const app = express()
const port = process.env.PORT || 4000
app.use(express.json())

function getRandomNumber(){
    return Math.floor(Math.random() * 101);
}

app.get("/random", (req,res) => {
    const number = getRandomNumber()
    res.send({number}) //res.body.number
})

app.listen(port)


module.exports = { getRandomNumber, app }