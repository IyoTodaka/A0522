require('dotenv').config()
require('express-async-errors')
require('./utils/db')

const express = require('express')
const app = express()
const port = process.env.PORT


//使用するデータ型がJSON型である事の宣言が必要なのでここで宣言しておく
app.use(express.json())


app.use('/check', (_, res) => res.json({ message: "Health check"}))

//  '/api'にリクエストが飛んで来たら、'./routes'を見に行ってという命令
app.use('/api', require('./routes'))

// app.use((req,res,next) => {
//     console.log("IN custom middleware")
//     const err = new Error("WHOOOPS!")
//     err.status = 999
//     throw err
//     // next();
// } )

// catch 404 and forward to error handler
app.use((req,res,next) => {
    const err = new Error("Route not found")
    err.status = 403
    next(err)
})

//catch all middleware/route
app.use((error, req,res,next) => {
    res.status(error.status || 500).json({ error: error.message })
})

app.listen(port, () => console.log(`Server is running on Port ${port}`))