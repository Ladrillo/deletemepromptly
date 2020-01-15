require('dotenv').config()

const port = process.env.PORT || 4000
const server = require('./server/server.js')

server.listen(port, () => {
  console.log(`listening on ${port}`);
})
