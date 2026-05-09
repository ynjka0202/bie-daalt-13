const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Task = require('./models/Task');

// .env файлаас тохиргоог унших
dotenv.config();

const app = express();
app.use(express.json()); // JSON өгөгдөл хүлээн авах

// MongoDB-тэй холбогдох
// .env файл дотор MONGO_URI=mongodb://localhost:27017/tasktracker гэж тохируулна
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/tasktracker';
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB-тэй амжилттай холбогдлоо.'))
    .catch(err => console.error('Холболтын алдаа:', err));

// --- API МАРШРУТУУД ---

// 1. Бүх даалгаврыг авах
app.get('/api/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Серверийн алдаа гарлаа.' });
    }
});

// 2. Шинэ даалгавар нэмэх
app.post('/api/tasks', async (req, res) => {
    try {
        const { title, description, priority, dueDate } = req.body;
        const newTask = new Task({ title, description, priority, dueDate });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(400).json({ error: 'Мэдээлэл буруу байна.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер http://localhost:${PORT} дээр ажиллаж байна.`);
});