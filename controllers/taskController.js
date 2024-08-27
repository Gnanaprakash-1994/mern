const mongoose = require('mongoose')
const taskModel = require('../models/TaskModel')


//To create a Task - POST Method:
const createTask = async(req,res) => {
    const {title,description} = req.body
    try{
        const task = await taskModel.create({title,description})
        res.status(200).json(task)
    } catch(e) {
        res.status(400).json({error:e.message})
    }
}


// Get all data - GET Method
const getTask = async(req,res) => {
    try{
        const tasks = await taskModel.find({})
        res.status(200).json(tasks)
    } catch(e){
        res.status(400).json({error: e.message})
    }
}

// To get Single Task data - GET Method
const getSignleTask = async(req,res) => {
    const {id} = req.params 
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'Task Not Found'})
    }
    try {
        const signleTask = await taskModel.findById(id)
        res.status(200).json(signleTask)
    } catch (e) {
        res.status(400).json({error: e.message})
    }

}

// To update a data for the task- PATCH Method:
const updateTask = async(req,res) => {
    const {id} = req.params 
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'Task Not Found'})
    }
    try{
        const taskUpdate = await taskModel.findByIdAndUpdate(
            {_id:id,},
            {...req.body,},
        )
        res.status(200).json(taskUpdate)
    }catch(e) {
        res.status(400).json({error: e.message})
    }
}

// Delete task data - DELETE Method:
const deleteTask = async(req,res) => {
    const {id} = req.params 
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: 'Task Not Found'})
    }
    try{
        const deletetask = await taskModel.findByIdAndDelete(id)
        res.status(400).json(deletetask)

    } catch(e) {
        res.status(400).json({error: e.message})
    }
}

module.exports = { createTask , getTask , getSignleTask , updateTask , deleteTask}