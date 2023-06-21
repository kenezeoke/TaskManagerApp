import Task from '../models/Task.js';
import asyncWrapper from './async.js';

export const getAllTasks = asyncWrapper(async (req, res) =>{
    const task = await Task.find({})
    res.status(200).json({task});
})


export const postTask = asyncWrapper(async (req, res) =>{
    const task = await Task.create(req.body)
    res.status(200).json({msg: "sent request"});
})

export const getOneTask = asyncWrapper(async (req, res) =>{
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    if(!task){
        return res.status(400).send("message not found")
    }
    res.status(200).json({task});
})

export const updateTask = asyncWrapper(async (req, res) =>{
    const {id:taskID} = req.params
    const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
        new:true,
        runValidators: true,
        overwrite: true
    })
    if(!task){
        return res.status(400).send("message not found")
    }
    res.status(200).json({msg: task});
})

export const deleteTask = asyncWrapper(async (req, res) =>{
    const {id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    if(!task){
        return res.status(400).send("message not found")
    }
    res.status(200).json({msg: "sent request"});
})