const Task = require('../models/Task');

/**
 * Статус болон шошгоор шүүж авах логик нэмэв
 */
const getAllTasks = async (filter = {}) => {
  const query = {};

  // Статус болон ач холбогдлоор шүүх
  if (filter.status) query.status = filter.status;
  if (filter.priority) query.priority = filter.priority;
  
  // Шошгоор (label) шүүх - Array дотор байгаа эсэхийг $in ашиглаж шалгана
  if (filter.label) query.labels = { $in: [filter.label] };

  // Огнооны шүүлтүүр
  if (filter.dueBefore || filter.dueAfter) {
    query.dueDate = {};
    if (filter.dueBefore) query.dueDate.$lte = new Date(filter.dueBefore);
    if (filter.dueAfter) query.dueDate.$gte = new Date(filter.dueAfter);
  }

  // Өгөгдлийн сангаас хугацаа болон үүсгэсэн огноогоор эрэмбэлж авах
  const tasks = await Task.find(query).sort({ dueDate: 1, createdAt: -1 });

  const priorityOrder = { high: 0, medium: 1, low: 2 };

  return tasks.sort((a, b) => {
    const aPrio = priorityOrder[a.priority] !== undefined ? priorityOrder[a.priority] : 3;
    const bPrio = priorityOrder[b.priority] !== undefined ? priorityOrder[b.priority] : 3;
    return aPrio - bPrio;
  });
};

const getTaskById = async (id) => {
  try {
    return await Task.findById(id);
  } catch (error) {
    return null;
  }
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