/* eslint-env node */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register',(req,res) => {
    res.send({
        message: `Hello ${req.body.email} your request has been heard`
    })
})
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

app.listen(process.env.PORT || 8081)
