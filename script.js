// script.js
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});