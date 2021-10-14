import { tasktodo, inputEvent } from '../testdom.js';

const taskCompleted = () => {
  const items = [
    { description: 'item 1', complete: false },
    { description: 'item 2', complete: false },
    { description: 'item 3', complete: false },
  ];

  for (let i = 0; i < items.length; i += 1) {
    const removeParent = parseInt(tasktodo.parentNode.parentNode.id, 10);
    if (removeParent === items[i].id) {
      items[i].complete = true;
    }
  }
  return items;
};

const taskUncompleted = () => {
  const items = [
    { description: 'item 1', complete: true },
    { description: 'item 2', complete: false },
    { description: 'item 3', complete: false },
  ];

  for (let i = 0; i < items.length; i += 1) {
    const removeParent = parseInt(tasktodo.parentNode.parentNode.id, 10);
    if (removeParent === items[i].id) {
      items[i].complete = false;
    }
  }

  return items;
};

const removeTasks = () => {
  const items = [
    { id: 1, description: 'item 1', complete: true },
    { id: 2, description: 'item 2', complete: true },
    { id: 3, description: 'item 3', complete: false },
  ];

  for (let i = 0; i < items.length; i += 1) {
    items.filter((item) => {
      if (item.complete) {
        const index = items.indexOf(item);
        items.splice(index, 1);
        let i = 0;
        while (i < items.length) {
          if (items[i].id > item.id) {
            items[i].id -= 1;
          }
          i += 1;
        }
      }
      return item;
    });
  }

  return items;
};

exports.taskCompleted = taskCompleted;
exports.taskUncompleted = taskUncompleted;
exports.removeTasks = removeTasks;
