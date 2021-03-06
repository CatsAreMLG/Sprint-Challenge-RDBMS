const express = require('express')
const helmet = require('helmet')
const server = express()
const ProjectsRouter = require('./data/routers/projectsRouter')
const ActionsRouter = require('./data/routers/actionsRouter')
const PORT = 9090

server.use(helmet())
server.use(express.json())
server.use('/api/projects', ProjectsRouter)
server.use('/api/actions', ActionsRouter)

server.get('/', (req, res) => res.send('<h2>Welcome to the API</h2>'))

server.listen(PORT, _ => console.log('Listening on port ' + PORT))
