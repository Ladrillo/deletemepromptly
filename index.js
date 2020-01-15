require('dotenv').config()

const helmet = require('helmet')
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(helmet())
app.use(express.static('client/build'))

app.use((req, res) => {
  res.json('alive')
})

app.listen(port, () => {
  console.log(`listening on ${port}`);
})