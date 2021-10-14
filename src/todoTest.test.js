import { addTaskList, removeTaskList } from './todoTest.js';

describe(' add new task', () => {
  test('check addTaskList function', () => {
    // Arrange
    let testArray = [1, 2, 3, 4];

    // Act
    testArray = addTaskList(testArray, 'Add new task');

    // Assert
    const latestElement = testArray[testArray.length - 1];
    expect(testArray).toHaveLength(5);
    expect(latestElement.completed).toBe(false);
    expect(latestElement.description).toBe('Add new task');
    expect(latestElement.index).toBe(testArray.length);
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
});