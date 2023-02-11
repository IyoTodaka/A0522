const express = require('express')
const app = express()

app.get("/", (req,res) => {
    res.json({ message: "health check"})
})

app.listen(3001)

module.exports = app