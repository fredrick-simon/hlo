function addTask() {
    const taskInput = document.getElementById('taskInput');
    const timeInput = document.getElementById('timeInput');
    const dateInput = document.getElementById('dateInput');
  
    const taskText = taskInput.value.trim();
    const taskTime = timeInput.value;
    const taskDate = dateInput.value;
  
    if (taskText !== '') {
      const todoList = document.getElementById('todoList');
  
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      const label = document.createElement('label');
      label.textContent = taskText;
  
      const time = document.createElement('span');
      time.textContent = taskTime;
  
      const date = document.createElement('span');
      date.textContent = taskDate;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function() {
        todoItem.remove();
      };
  
      todoItem.appendChild(checkbox);
      todoItem.appendChild(label);
      todoItem.appendChild(time);
      todoItem.appendChild(date);
      todoItem.appendChild(deleteButton);
  
      todoList.appendChild(todoItem);
  
      taskInput.value = '';
      timeInput.value = '';
      dateInput.value = '';
    }
  }
  