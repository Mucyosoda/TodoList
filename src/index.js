// import _ from 'lodash';

import './style.css';

const listTable = [{
  description: 'go to the market',
  completed: true,
  index: 0,
},
{
  description: 'wash dishes',
  completed: true,
  index: 1,
},
{
  description: 'play guitar',
  completed: true,
  index: 2,
},
'rwanda',
];

const todoList = document.querySelector('.todo-list');
// eslint-disable-no-use-before-define
function displayTodo(item) {
  return ` <div class='todo'>
  <div class="checkbox"><input type="checkbox"></div>
  <div class="description">${item.description}</div>
  <div class="icons"><i class="fas fa-ellipsis-v"></i></div>
  </div>`;
}

document.addEventListener('DOMContentLoaded', displayTodo);
todoList.innerHTML = `${listTable.map(displayTodo).join('')}`;