import { addTaskList, removeTaskList} from './todoTest.js';


const { dom } = require('./testdom.js');

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
    // Arrange
    const itemtodo = { index: 3 };
    const id = '3';
    // Act
    const result = removeTaskList(itemtodo, id);
    // Assert
    expect(result).toBe(false);
  });
  test('should not have childs', () => {
    expect(dom.window.document.querySelector('#test-2').childElementCount).toBe(1);
  });
});
