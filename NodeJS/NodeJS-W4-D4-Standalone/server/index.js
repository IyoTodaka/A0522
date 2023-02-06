const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use('/api/health', (req,res) => res.json({ message: "Health check"}))

app.listen(8080)