import { addTaskList, removeTaskList } from './todoTest.js';

const { dom } = require('./testdom.js');

jest.mock('./update');
const editTask = require('./update.js');

describe('add new task', () => {
  const empArr = [];
  const item = {
    completed: false,
    description: 'Laxmi',
    index: 1,
  };
  test('array length is 1', () => {
    expect(addTaskList(empArr, item.description)).toContainEqual(item);
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

describe('should edit the input content', () => {
  test('should edit', () => {
    expect(editTask('This is new input value')).toEqual([
      { id: 1, description: 'This is new input value', complete: true },
      { id: 2, description: 'item 2', complete: true },
      { id: 3, description: 'item 3', complete: false },
    ]);
  });
});