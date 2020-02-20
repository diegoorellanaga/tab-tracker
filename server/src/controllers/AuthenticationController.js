/* global module, require */
const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user){
  const ONE_WEEK = 60 * 60 * 24 *7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
      try{
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
        res.status(400).send({
            error: 'This email account is already in use'
        })
    }
  },
  async login (req, res) {
      try{
      const {email,password} = req.body  
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if(!user){
        return res.status(403).send({
          error: "Incorrect login information"
        })
      }
      //user.setDataValue('password', '$2a$08$iAX3H/Iu1EyEzqjI.nqX2eFEwbnRS6ueHSDSJPiZ7okXQ6XCSvL8C')
      const isPasswordValid = await user.comparePassword(password)
      console.log(password)
      console.log(await user.comparePassword(password))
      // console.log(await user.comparePassword('$2a$08$ZSrI7a71Cp1iZ3Zg5g0vZ.d3WiqgdtycHx8V8B49vj8nMh/I9/tBK')) $2a$08$q2YP9Kvk6/FgnFD0pob6OOJ6rNWHnQweIEsWRuM54SGBb219Gc69.
      if(!isPasswordValid){
        return res.status(403).send({
          error: "Incorrect login information"
        })
      }

      const userJson = user.toJSON()

      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
        console.log(err)
        res.status(500).send({
            error: 'An error has ocurred trying to login'
        })
    }
  }


}