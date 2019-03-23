const express = require('express')
const Actions = require('../helpers/actionsDb')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const actions = await Actions.getActions()
    res.status(200).json(actions)
  } catch (error) {
    res.status(500).json({ error })
  }
})
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const action = await Actions.getAction(id)
    action
      ? res.status(200).json(action)
      : res.status(404).json({ error: 'Action not found' })
  } catch (error) {
    res.status(500).json({ error })
  }
})
router.post('/', async (req, res) => {
  const { body } = req
  if (body && body.action_description && body.notes)
    try {
      body.complete = false
      const id = await Actions.addAction(body)
      res.status(201).json(id)
    } catch (error) {
      res.status(500).json({ error })
    }
  else res.status(500).json({ error: 'Please provide a description and notes' })
})
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { body } = req
  if (body && body.action_description && body.notes)
    try {
      const update = await Actions.updateAction(id, body)
      if (update) {
        if (update.length > 0) res.status(200).json(update)
        else {
          const action = await Actions.getAction(id)
          res.status(200).json(action)
        }
      } else res.status(404).json({ error: 'Action not found' })
    } catch (error) {
      res.status(500).json({ error })
    }
  else
    res.status(500).json({
      error:
        'Please provide a change (action description and/or notes and/or completed)'
    })
})
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deleted = await Actions.removeAction(id)
    deleted
      ? res.status(200).json(deleted)
      : res.status(404).json({ error: 'Action not found' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

module.exports = router
