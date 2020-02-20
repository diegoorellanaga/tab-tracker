/* global module, require*/
/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "options" }]*/
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))
// eslint-disable-next-line
function hashPassword (user, options) {
	/* exported options */
    const SALT_FACTOR = 8

    if (!user.changed('password')) {
        return;
    }

    return bcrypt
      .genSaltAsync(SALT_FACTOR)
      .then(salt => bcrypt.hashAsync(user.password, salt, null))
      .then(hash => {
          user.setDataValue('password', hash)
          console.log('hash',hash)
          console.log('options',options)
      })

}


module.exports = (sequelize, DataTypes) => {
   const User = sequelize.define('User', {
       email: {
           type: DataTypes.STRING,
           unique: true
       },
       password: DataTypes.STRING
   }, {
       hooks: {
           beforeCreate: hashPassword
           // beforeUpdate: hashPassword,
           // beforeSave: hashPassword
       }
   })

   User.prototype.comparePassword = function (password) {
     console.log('password',password)
     console.log('this.password',this.password)
     return bcrypt.compareAsync(password, this.password)
   }


   return User
}