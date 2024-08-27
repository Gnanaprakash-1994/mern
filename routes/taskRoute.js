const express = require('express')

const router = express.Router()

const {createTask,getTask,getSignleTask,updateTask, deleteTask} = require('../controllers/taskController')

router.post('/',createTask)

router.get('/',getTask)

router.get('/:id',getSignleTask)

router.patch('/:id',updateTask)

router.delete('/:id',deleteTask)

module.exports = router