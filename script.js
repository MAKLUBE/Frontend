// Intro to JavaScript — Tasks 0–8 (beginner-friendly)
// Run after the document is ready so elements exist

document.addEventListener('DOMContentLoaded', () => {
  // ======================= Task 0. First Script =======================
  const studentName = 'Sakenov Rassul';
  const groupName = 'Software Engineering (2nd course)';
  console.log(`Name: ${studentName}, Group: ${groupName}`);
  alert('Hello, JavaScript World!');

  // ================== Task 1. Variables & Operators ==================
  const courseTitle = 'Introduction to JavaScript'; // string
  const numberA = 10; // number
  const numberB = 3; // number
  const isStudent = true; // boolean

  console.log('String variable:', courseTitle);
  console.log('Number variables:', numberA, numberB);
  console.log('Boolean variable:', isStudent);

  console.log('Add:', numberA + numberB);
  console.log('Subtract:', numberA - numberB);
  console.log('Multiply:', numberA * numberB);
  console.log('Divide:', numberA / numberB);

  const greeting = 'Hello, ' + studentName + '!';
  const intro = ' Welcome to ' + courseTitle + '.';
  console.log('Concatenated string:', greeting + intro);

  // =================== Task 2. Changing Content ======================
  const task2Paragraph = document.getElementById('task2-paragraph');
  const task2Button = document.getElementById('task2-button');
  if (task2Button && task2Paragraph) {
    task2Button.addEventListener('click', () => {
      task2Paragraph.textContent = 'The paragraph text has been changed!';
    });
  }

  // =================== Task 3. Changing Styles =======================
  const task3Box = document.getElementById('task3-box');
  const task3BgBtn = document.getElementById('task3-bg-btn');
  const task3FontBtn = document.getElementById('task3-font-btn');

  if (task3Box && task3BgBtn) {
    let bgToggle = false;
    task3BgBtn.addEventListener('click', () => {
      bgToggle = !bgToggle;
      task3Box.style.backgroundColor = bgToggle ? 'lightyellow' : 'lightblue';
    });
  }

  if (task3Box && task3FontBtn) {
    let bigFont = false;
    task3FontBtn.addEventListener('click', () => {
      bigFont = !bigFont;
      task3Box.style.fontSize = bigFont ? '24px' : '16px';
    });
  }

  // ============ Task 4. Creating & Removing Elements ================
  const task4Add = document.getElementById('task4-add');
  const task4Remove = document.getElementById('task4-remove');
  const task4List = document.getElementById('task4-list');
  if (task4Add && task4Remove && task4List) {
    let nextItemNumber = 1;
    task4Add.addEventListener('click', () => {
      const li = document.createElement('li');
      li.textContent = 'Item ' + nextItemNumber++;
      task4List.appendChild(li);
    });

    task4Remove.addEventListener('click', () => {
      const last = task4List.lastElementChild;
      if (last) task4List.removeChild(last);
    });
  }

  // ===================== Task 5. Mouse Events ========================
  const hoverBox = document.getElementById('task5-hoverbox');
  if (hoverBox) {
    const originalBg = getComputedStyle(hoverBox).backgroundColor;
    hoverBox.addEventListener('mouseover', () => {
      hoverBox.style.backgroundColor = 'orange';
    });
    hoverBox.addEventListener('mouseout', () => {
      hoverBox.style.backgroundColor = originalBg;
    });
  }

  // ==================== Task 6. Keyboard Events ======================
  const task6Input = document.getElementById('task6-input');
  const task6Output = document.getElementById('task6-output');
  if (task6Input && task6Output) {
    task6Input.addEventListener('keyup', () => {
      task6Output.textContent = task6Input.value;
    });
  }

  // ================ Task 7. Form Validation (optional) ===============
  const form = document.getElementById('task7-form');
  const nameField = document.getElementById('task7-name');
  const emailField = document.getElementById('task7-email');
  const passwordField = document.getElementById('task7-password');
  const errorEl = document.getElementById('task7-error');
  if (form && nameField && emailField && passwordField && errorEl) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = nameField.value.trim();
      const email = emailField.value.trim();
      const password = passwordField.value.trim();

      if (!name || !email || !password) {
        errorEl.textContent = 'Please fill out all fields before submitting.';
        return;
      }

      errorEl.textContent = '';
      console.log('Form is valid. Ready to submit.');
    });
  }

  // ========== Task 8. Mini Project — Interactive To-Do List ==========
  const todoInput = document.getElementById('todo-input');
  const todoAdd = document.getElementById('todo-add');
  const todoList = document.getElementById('todo-list');

  const tasks = []; // temporary storage in memory
  let nextTaskId = 1;

  function renderTodos() {
    if (!todoList) return;
    todoList.innerHTML = '';
    tasks.forEach((task) => {
      const li = document.createElement('li');
      li.className = 'todo-item' + (task.completed ? ' completed' : '');

      const textSpan = document.createElement('span');
      textSpan.textContent = task.text;
      textSpan.className = 'todo-text';
      textSpan.title = 'Click to toggle complete';
      textSpan.addEventListener('click', () => toggleTask(task.id));

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => deleteTask(task.id));

      li.appendChild(textSpan);
      li.appendChild(deleteBtn);
      todoList.appendChild(li);
    });
  }

  function addTask(text) {
    tasks.push({ id: nextTaskId++, text, completed: false });
    renderTodos();
  }

  function deleteTask(id) {
    const index = tasks.findIndex((t) => t.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      renderTodos();
    }
  }

  function toggleTask(id) {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
      renderTodos();
    }
  }

  function handleAdd() {
    if (!todoInput) return;
    const text = todoInput.value.trim();
    if (!text) return;
    addTask(text);
    todoInput.value = '';
    todoInput.focus();
  }

  if (todoAdd) {
    todoAdd.addEventListener('click', handleAdd);
  }
  if (todoInput) {
    todoInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') handleAdd();
    });
  }
});
