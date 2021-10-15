/*
 * @jest-environment jsdom
 */
import {
  addTaskList,
  removeTaskList,
  editTask,
  updateCompleted,
  clearTaskCompleted,
} from './todoTest.js';

describe(' add an item to the List', () => {
  test('Test addTaskList function', () => {
    let givenArr = [1, 2, 3, 4];
    givenArr = addTaskList(givenArr, 'Added to the listli');
    const latestElement = givenArr[givenArr.length - 1];
    expect(givenArr).toHaveLength(5);
    expect(latestElement.completed).toBe(false);
    expect(latestElement.description).toBe('Added to the listli');
    expect(latestElement.index).toBe(givenArr.length);
  });
});

describe('remove a task from List', () => {
  test('Test removeTaskList function', () => {
    const itemtodo = { index: 3 };
    const id = '3';
    const result = removeTaskList(itemtodo, id);
    expect(result).toBe(false);
  });
});

describe('Test edit existing task', () => {
  test('Task edit function', () => {
    const takenArr = [{ index: 2, description: 'push in this' }];
    const id2 = '2';
    const newestItem = 'push this in';

    editTask(takenArr, id2, newestItem);
    expect(takenArr[0].description).toBe('push this in');
  });
});

describe('Update all items that are completed', () => {
  test('Test updateCompleted function', () => {
    const newItem = { completed: true };
    const newInput = { checked: true };

    updateCompleted(newItem, newInput);
    expect(newItem.completed).toBe(newInput.checked);
  });
});

describe('clear completed function', () => {
  test('Test clear function', () => {
    document.body.innerHTML = `
    <div class="todo-item">
        <input type="checkbox"></input>
    </div>
    <div class="todo-item">
        <input type="checkbox" checked></input>
    </div>
    <div class="todo-item>
        <input type="checkbox"></input>
    </div>
    `;
    clearTaskCompleted([]);
    const remainingItems = document.querySelectorAll('.todo-item');
    expect(remainingItems).toHaveLength(1);
  });
});
