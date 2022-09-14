const express = require('express')
const app = express()
const connectToDB = require('./db')
const loginRoutes = require('./routes/routes.login')
const routes = require('./routes/user.route')
const PORT = 3000

connectToDB()

app.use(express.json())
app.use('/insta', routes)
app.use('/insta1', loginRoutes)
app.listen(PORT, console.log('Heya...! Server is listening on port', PORT))
