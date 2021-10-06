import newListTable from './index.js';
import { completedTasks } from './index.js';

const saveLocalList = () => {
  localStorage.setItem('data', JSON.stringify(newListTable));
};

export const toggleChecked = (e) => {
  const checkStatus = e.target.checked;
  const task = e.target.parentElement;
  const taskId = task.id;
  let removed = false;

  newListTable[taskId].completed = checkStatus;

  if (completedTasks.length === 0) {
    completedTasks.push(taskId);
  } else {
    completedTasks.forEach((index) => {
      if (taskId === index) {
        completedTasks.splice(completedTasks.indexOf(index), 1);
        removed = true;
      }
    });

    if (!removed) {
      completedTasks.push(taskId);
      completedTasks.sort();
    }
  }
  saveLocalList();
};
