// sign in  and login model for user
// Name, Req. unique username, Req. password and Email

const mongoose = require('mongoose')

const signinSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    maxlength: 50
  },
  username: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1
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

const UserModel = mongoose.model('UserModel', signinSchema)
module.exports = UserModel
