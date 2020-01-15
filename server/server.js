const helmet = require('helmet')
const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '../client/build')))
app.use(express.json())
app.use(helmet())

app.get('/greeting', (req, res) => {
  res.json('hello')
})

module.exports = app