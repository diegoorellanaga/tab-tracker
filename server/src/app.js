/* eslint-env node */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const {sequelize} = require('./models')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

app.post('/register2',(req,res) => {
    res.send({
        message: `Hello ${req.body.email} your request has been heard!!!!!!!!!!!!!!!`
    })
})
app.get('/register',(req,res) => {
    res.send({
        message: `Hello your request has been heard`
    })
})

sequelize.sync()
   .then(() => {
      app.listen(config.port)
      console.log(`Server started on port ${config.port}`)
   })
