export const removeTaskList = (something, id) => {
  if (something.index.toString() === id) {
    return false;
  }
  return true;
};

export const addTaskList = (itemsArray, value) => {
  itemsArray.push({
    completed: false,
    description: value,
    index: itemsArray.length + 1,
  });

  return itemsArray;
};
