// sign in  and login contorller for user
// Name, Req. unique username, Req. password and email

const UserModel = require('../models/User.model')
const LoginModel = require('../models/login.model')
async function loginUser (req, res) {
  const existUser = new LoginModel(req.body)

  try {
    const usernameExists = await UserModel.findOne({ username: req.body.username })
    const passwordExists = await UserModel.findOne({ password: req.body.password })
    console.log(usernameExists, passwordExists)

    if (usernameExists && passwordExists) {
      try {
        await existUser.save()
        res.send({ message: 'user details updated successfully' })
      } catch (error) {
        res.send(error)
      }
    } else {
      res.send('Not LoginModel updated')
    }
  } catch (error) {
    res.send(error)
  }
}
module.exports = { loginUser }
