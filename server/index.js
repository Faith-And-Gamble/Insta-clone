const express = require('express')
const app = express()
const connectToDB = require('./db')
const routes = require('./routes/user.route')
const PORT = 3000

connectToDB()

app.use(express.json())
app.use('/insta', routes)
app.listen(PORT, console.log('Heya...! Server is listening on port', PORT))
