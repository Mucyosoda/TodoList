/* eslint-disable import/no-cycle */
/* eslint-disable prefer-const */

import './style.css';
import toggleChecked from './check.js';

const listTable = [
  {
    description: 'go to the market',
    completed: false,
  },
  {
    description: 'wash dishes',
    completed: false,
  },
  {
    description: 'Complete my project',
    completed: false,
  },
  {
    description: 'do sport',
    completed: false,
  },
];

const completedTasks = [];

if (localStorage.getItem('data') === null) {
  localStorage.setItem('data', JSON.stringify(listTable));
}

const newListTable = JSON.parse(localStorage.getItem('data'));

const updateCompletedListArray = () => {
  newListTable.forEach((task) => {
    if (task.completed) completedTasks.push(`${newListTable.indexOf(task)}`);
  });
};

const updateListView = () => {
  const ul = document.getElementById('taskList');
  ul.innerHTML = '';

  newListTable.forEach((task) => {
    const listItem = document.createElement('li');
    const taskLabel = document.createElement('label');
    const delBtn = document.createElement('span');
    const dotBtn = document.createElement('span');
    const checkbox = document.createElement('input');

    listItem.className = 'task';
    listItem.id = newListTable.indexOf(task);
    taskLabel.className = 'taskLabel';
    taskLabel.textContent = task.description;
    taskLabel.htmlFor = `c${newListTable.indexOf(task)}`;
    delBtn.className = 'deleteTaskBtn';
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';

    dotBtn.className = 'dotbtn';
    dotBtn.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    dotBtn.onclick = '';

    checkbox.className = 'taskCheckbox';
    checkbox.id = `c${newListTable.indexOf(task)}`;
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('click', toggleChecked);

    listItem.appendChild(checkbox);
    listItem.appendChild(taskLabel);
    listItem.appendChild(dotBtn);
    listItem.appendChild(delBtn);
    ul.appendChild(listItem);
  });
};

updateCompletedListArray();
updateListView();

export { newListTable, completedTasks };
