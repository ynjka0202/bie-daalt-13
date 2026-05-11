const Task = require('../models/Task');

const getAllTasks = async (filter = {}) => {
  const query = {};

  if (filter.status) query.status = filter.status;
  if (filter.priority) query.priority = filter.priority;
  if (filter.label) query.labels = { $in: [filter.label] };

  // Due date шүүлтүүр
  if (filter.dueBefore) query.dueDate = { $lte: new Date(filter.dueBefore) };
  if (filter.dueAfter) query.dueDate = { ...query.dueDate, $gte: new Date(filter.dueAfter) };

  // Priority эрэмбэлэлт
  const priorityOrder = { high: 0, medium: 1, low: 2 };
  const tasks = await Task.find(query).sort({ dueDate: 1, createdAt: -1 });

  return tasks.sort((a, b) => {
    return (priorityOrder[a.priority] ?? 1) - (priorityOrder[b.priority] ?? 1);
  });
};

// Хугацаа дууссан task-уудыг авах
const getOverdueTasks = async () => {
  return await Task.find({
    dueDate: { $lt: new Date() },
    status: { $ne: 'done' },
  }).sort({ dueDate: 1 });
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
  getOverdueTasks,
};