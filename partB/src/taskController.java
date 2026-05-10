const taskService = require('../services/taskService');

const getAllTasks = async (req, res) => {
  try {
    const { status, priority, label } = req.query;
    const tasks = await taskService.getAllTasks({ status, priority, label });
    res.json({ success: true, data: tasks });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ success: false, error: 'Task not found' });
    res.json({ success: true, data: task });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json({ success: true, data: task });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await taskService.updateTask(req.params.id, req.body);
    if (!task) return res.status(404).json({ success: false, error: 'Task not found' });
    res.json({ success: true, data: task });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await taskService.deleteTask(req.params.id);
    if (!task) return res.status(404).json({ success: false, error: 'Task not found' });
    res.json({ success: true, message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
