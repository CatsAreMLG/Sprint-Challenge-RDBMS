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
router.post('/', async (req, res) => {
  const { body } = req
  if (body && body.project_name && body.project_description)
    try {
      body.finished = false
      const id = await Projects.addProject(body)
      res.status(201).json(id)
    } catch (error) {
      res.status(500).json({ error })
    }
  else
    res
      .status(500)
      .json({ error: 'Please provide a project name and description' })
})

module.exports = router
