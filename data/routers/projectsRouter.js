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
    if (project && project.length > 0) {
      let newProject = {
        project_name: '',
        project_description: '',
        finished: '',
        actions: []
      }
      for (let i in project) {
        newProject.project_name = project[i].project_name
        newProject.project_description = project[i].project_description
        newProject.finished = project[i].finished
        newProject.actions.push({
          action_description: project[i].action_description,
          notes: project[i].notes,
          complete: project[i].complete
        })
      }
      res.status(200).json(newProject)
    } else res.status(404).json({ error: 'Project not found' })
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
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { body } = req
  if (body && body.project_name && body.project_description)
    try {
      const update = await Projects.updateProject(id, body)
      if (update) {
        if (update.length > 0) res.status(200).json(update)
        else {
          const project = await Projects.getProjectSolo(id)
          res.status(200).json(project)
        }
      } else res.status(404).json({ error: 'Project not found' })
    } catch (error) {
      res.status(500).json({ error })
    }
  else
    res.status(500).json({
      error:
        'Please provide a change (project name and/or description and/or finished)'
    })
})

module.exports = router
