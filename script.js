// yaha sab jarurati saman hai
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

let taskId = 0;

// Nayi yaadein kaise banaye
function createTaskItem(taskText) {
 

  const taskItem = document.createElement('li');
  const taskNumber = document.createElement('span');
  const taskTextElement = document.createElement('span');
  const completeButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  //item ko number dete hai task 1 task 2
  taskItem.setAttribute('data-id', taskId);

  // iteam ko naam ar no dete hai
  taskNumber.classList.add('task-number');
  taskNumber.textContent = 'Task ' + (taskId + 1);
  taskTextElement.classList.add('task-text');
  taskTextElement.textContent = taskText;

  // acha dikhne ke liye event listener se phool lgate hai
  completeButton.classList.add('complete');
  completeButton.textContent = '✓';
  completeButton.addEventListener('click', function () {
    taskItem.classList.toggle('completed');
  });

  // phool ke kante nikal ke delete krne ke liye event listner
  deleteButton.textContent = '✕';
  deleteButton.addEventListener('click', function () {
    taskItem.remove();
  });

  // Append the elements to the task item
  taskItem.appendChild(taskNumber);
  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(completeButton);
  taskItem.appendChild(deleteButton);

  return taskItem;
}

// nayi iteam add krne ke liye
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    taskId++;
    taskInput.value = '';
    taskInput.focus();
  }
}


addTaskBtn.addEventListener('click', addTask);


taskInput.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    addTask();
  }
});