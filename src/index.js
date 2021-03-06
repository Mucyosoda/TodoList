import './style.css';
import taskCompleted from './check.js';
import {
  addTask, editContent, removeOne, removeTasks,
} from './update.js';

const itemsContainer = document.querySelector('.items-container');
const input = document.createElement('input');
const inputCont = document.querySelector('.input');
inputCont.className = 'mc';
const span = document.createElement('span');
span.className = 'span';
const deleteCont = document.querySelector('.delete');
const deleteText = document.createElement('button');
const icon = document.createElement('i');
const enter = document.createElement('i');

input.type = 'text';
input.autofocus = true;
input.setAttribute('placeholder', 'Add to your list ......');
enter.classList.add('fas', 'fa-level-down-alt', 'rotate');
span.appendChild(enter);
inputCont.appendChild(input);
inputCont.appendChild(span);
deleteText.classList.add('textdelete');
deleteText.textContent = 'Clear all completed';
deleteCont.appendChild(deleteText);

let items = [];
let indexCont = 0;

if (localStorage.getItem('items')) {
  items = [...JSON.parse(localStorage.getItem('items'))];
  items.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('input-line');
    div.id = `${(indexCont += 1)}`;
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.completed;
    checkbox.addEventListener('change', (e) => taskCompleted(e, items, deleteCont));

    const p = document.createElement('input');
    p.type = 'text';
    p.setAttribute('readonly', 'readonly');
    p.value = item.description;
    p.addEventListener('click', (e) => editContent(e, p, items));

    const dotBtn = document.createElement('i');
    dotBtn.classList.add('fas', 'fa-ellipsis-v', 'flex-end');
    const deleteBtn = document.createElement('i');
    deleteBtn.classList.add('fas', 'fa-trash-alt', 'flex-end');

    const dotbtn = document.createElement('span');
    dotbtn.className = 'dotbtn';
    const dltbtn = document.createElement('span');
    dltbtn.className = 'dltbtn';

    deleteBtn.addEventListener('click', (e) => removeOne(e, items));
    dltbtn.appendChild(deleteBtn);
    dotbtn.appendChild(dotBtn);
    div.appendChild(checkbox);
    div.appendChild(p);
    div.appendChild(dltbtn);
    div.appendChild(dotbtn);

    itemsContainer.appendChild(div);
    if (item.completed) {
      div.classList.add('completed');
    }
  });
} else {
  localStorage.setItem('items', JSON.stringify(items));
}
class Item {
  constructor() {
    this.description = '';
    this.completed = false;
    this.id = '';
  }
}
input.addEventListener('keydown', (e) => addTask(e, items, input, itemsContainer, Item));

deleteText.addEventListener('click', (e) => removeTasks(e, items, deleteCont, Item));
const refreshPage = () => {
  icon.classList.add('refresh');
  setTimeout(() => {
    window.location.reload();
  }, 500);
};

const refresh = document.querySelector('.fa-sync');
refresh.addEventListener('click', refreshPage);
