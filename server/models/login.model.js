// sign in  and login model for user
// Name, Req. unique username, Req. password and Email

const mongoose = require('mongoose')

const loginSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
//   token: {
//     type: String
//   }
})

const LoginModel = mongoose.model('LoginModel', loginSchema)
module.exports = LoginModel
