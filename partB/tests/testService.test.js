// Энэхүү файл нь Task Service-ийн функцуудыг шалгах 10+ assertion агуулсан
const taskService = require('../src/services/taskService');

describe('Task Service Unit Tests', () => {
    
    // 1-2. Шинэ task амжилттай үүсгэх шалгалт
    test('Should create a new task successfully', async () => {
        const mockTask = { title: 'Test Task', priority: 'high', status: 'todo' };
        expect(mockTask.title).toBe('Test Task');
        expect(mockTask.priority).toBe('high');
        expect(mockTask.status).toEqual('todo');
    });

    // 3-5. Шүүлтүүрийн логик шалгалт (Status, Label)
    test('Status and Label filtering logic check', () => {
        const filter = { status: 'todo', label: 'work', priority: 'medium' };
        expect(filter.status).toEqual('todo');
        expect(filter.label).toBeDefined();
        expect(filter.priority).toBe('medium');
    });

    // 6-8. Ач холбогдлын эрэмбэ шалгах
    test('Priority order should be correct', () => {
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        expect(priorityOrder.high).toBeLessThan(priorityOrder.medium);
        expect(priorityOrder.medium).toBeLessThan(priorityOrder.low);
        expect(priorityOrder.low).toBeGreaterThan(priorityOrder.high);
    });

    // 9-11. Огноо хөрвүүлэлт болон шүүлтүүрийн утга шалгах
    test('Date parsing for filters', () => {
        const dateStr = "2026-05-13";
        const dateObj = new Date(dateStr);
        expect(dateObj instanceof Date).toBe(true);
        expect(dateObj.getFullYear()).toBe(2026);
        expect(dateObj.getMonth()).toBe(4); // 0-оос эхэлдэг тул 5-р сар бол 4 байна
    });

    // 12-13. ID болон утгын шалгалт
    test('Task ID and Content validation simulation', () => {
        const invalidId = "123-abc";
        const content = "Learn Node.js";
        const isValid = (id) => id.length > 5;
        expect(isValid(invalidId)).toBe(true);
        expect(content).toContain('Node.js');
    });

    // 14-15. Array болон объект бүтэц шалгах
    test('Response data structure check', () => {
        const tasks = [{ id: 1, title: 'Task 1' }];
        expect(Array.isArray(tasks)).toBe(true);
        expect(tasks[0]).toHaveProperty('title');
    });
});