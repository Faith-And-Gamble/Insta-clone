// sign in  and login route for user
// Name, Req. unique username, Req. password and Email

const express = require('express')
const { loginUser } = require('../controller/login.controller')

const loginRoutes = express.Router()
loginRoutes.post('/login', loginUser)

module.exports = loginRoutes
