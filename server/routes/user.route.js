// sign in  and login route for user
// Name, Req. unique username, Req. password and Email

const express = require('express')
const { loginPost } = require('../controller/user.controller')
const routes = express.Router()

routes.post('/signup', loginPost)

module.exports = routes
