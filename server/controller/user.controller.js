// sign in  and login contorller for user
// Name, Req. unique username, Req. password and email

const UserModel = require('../models/User.model.js')
async function loginPost (req, res) {
  // const newUser = new UserModel(req, body);
//   const [username, email] = req.body
//   try {
//     const usernameExists = await UserModel.findOne({ username })
//     const emailExists = await UserModel.findOne({ email })

  //     if (usernameExists && emailExists) {
  //       res.status(400)
  //       throw new Error('Username and email already exists')
  //     } else if (usernameExists) {
  //       res.status(400)
  //       throw new Error('Username already exists')
  //     } else if (emailExists) {
  //       res.status(400)
  //       throw new Error('Email already exists')
  //     }
  //   } catch (error) {
  //     console.error(error)
  //   }
  const newUser = new UserModel(req.body)
  try {
    await newUser.save()
    res.send({ message: 'user details updated successfully' })
  } catch (error) {
    res.send({ message: error })
  }
};

module.exports = { loginPost }
