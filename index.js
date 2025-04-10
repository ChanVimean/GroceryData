const jsonServer = require('json-server')
const server = jsonServer.create()
const middleware = jsonServer.defaults()
const route = jsonServer.router('data.json')
const { config } = require('dotenv')
const cors = require('cors')

config()

server.use(cors())
server.use(middleware)
server.use(route)

const PORT = process.env.PORT || 9091
const HOST = process.env.HOST || "127.0.0.1"

server.listen(PORT, () => {
  console.log(`http://${HOST}:${PORT}`)
})