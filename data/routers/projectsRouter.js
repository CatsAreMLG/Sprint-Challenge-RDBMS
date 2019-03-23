const express = require('express')
const Projects = require('../helpers/projectsDb')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.getProjects()
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({ error })
  }
})

module.exports = router
