import { addTaskList, removeTaskList } from './todoTest.js';

const { dom } = require('./testdom.js');

describe(' add new task', () => {
  test('check addTaskList function', () => {
    let testArray = [1, 2, 3, 4];
    testArray = addTaskList(testArray, 'Add new task');

    const latestElement = testArray[testArray.length - 1];
    expect(testArray).toHaveLength(5);
    expect(latestElement.completed).toBe(false);
    expect(latestElement.description).toBe('Add new task');
    expect(latestElement.index).toBe(testArray.length);
  });

  test('array is not null', () => {
    expect(addTaskList).not.toBeNull();
  });
});

describe('remove task', () => {
  test('check removeTaskList function', () => {
    const itemtodo = { index: 3 };
    const id = '3';
    const result = removeTaskList(itemtodo, id);
    expect(result).toBe(false);
  });
  test('should not have childs', () => {
    expect(dom.window.document.querySelector('#test-2').childElementCount).toBe(
      1,
    );
  });
});
