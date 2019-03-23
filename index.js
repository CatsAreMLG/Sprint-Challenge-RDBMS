const express = require('express')
const helmet = require('helmet')
const server = express()
const PORT = 9090

server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => res.send('<h2>Welcome to the API</h2>'))

server.listen(PORT, _ => console.log('Listening on port ' + PORT))
