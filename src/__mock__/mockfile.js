import { tasktodo } from '../testdom.js';

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
