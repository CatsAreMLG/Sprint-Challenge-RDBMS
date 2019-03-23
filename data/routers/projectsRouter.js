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
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const project = await Projects.getProject(id)
    project
      ? res.status(200).json(project)
      : res.status(404).json({ error: 'Project not found' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

module.exports = router
