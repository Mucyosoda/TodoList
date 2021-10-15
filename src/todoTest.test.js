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

describe('Edit existing items test', () => {
  test('Todo edit function', () => {
    const takenArr = [{ index: 2, description: 'push in this' }];
    const id2 = '2';
    const newestItem = 'push this in';

    editTodo(takenArr, id2, newestItem);

    expect(takenArr[0].description).toBe('push this in');
  });
});

describe('A test to update items that are completed', () => {
  test('Test updateCompleted function', () => {
    const newItem = { completed: true };
    const newInput = { checked: true };

    updateCompleted(newItem, newInput);

    expect(newItem.completed).toBe(newInput.checked);
  });
});

describe('A clear completed', () => {
  test('Test function', () => {
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
    clearCompletedTodos([]);
    const remainingItems = document.querySelectorAll('.todo-item');
    expect(remainingItems).toHaveLength(1);
  });
});