import express from 'express';
import { getAllTasks, getOneTask, postTask, updateTask, deleteTask } from '../controller/tasks.js';
const router = express.Router()

router.route('/').get(getAllTasks).post(postTask)
router.route('/:id').get(getOneTask).patch(updateTask).delete(deleteTask)

export default router