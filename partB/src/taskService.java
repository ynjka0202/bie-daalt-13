const Task = require('../models/Task');

const getAllTasks = async (filter = {}) => {
  const query = {};

  if (filter.status) query.status = filter.status;
  if (filter.priority) query.priority = filter.priority;
  if (filter.label) query.labels = { $in: [filter.label] };

  return await Task.find(query).sort({ createdAt: -1 });
};

const getTaskById = async (id) => {
  return await Task.findById(id);
};

const createTask = async (data) => {
  const task = new Task(data);
  return await task.save();
};

const updateTask = async (id, data) => {
  return await Task.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

const deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
