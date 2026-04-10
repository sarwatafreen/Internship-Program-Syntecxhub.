// // let board = JSON.parse(localStorage.getItem("board")) || {
// //   todo: [],
// //   doing: [],
// //   done: []
// // };

// // function saveBoard() {
// //   localStorage.setItem("board", JSON.stringify(board));
// // }   


// function addTask(columnId) {
//   const taskText = prompt("Enter task description:");
//   if (!taskText) return;

//   const taskList = document.querySelector(`#${columnId} .tasks`);
//   const taskId = 'task-' + Date.now(); // Unique ID

//   const taskCard = document.createElement('div');
//   taskCard.className = 'task-card';
//   taskCard.id = taskId;
//   taskCard.draggable = true;
//   taskCard.innerText = taskText;

//   // Event listener for dragging
//   taskCard.ondragstart = (event) => {
//     event.dataTransfer.setData("text/plain", event.target.id);
//   };

//   taskList.appendChild(taskCard);
// }

// // Allow elements to be dropped into this area
// function allowDrop(event) {
//   event.preventDefault();
// }

// // Handle the drop event
// function drop(event, columnId) {
//   event.preventDefault();
//   const taskId = event.dataTransfer.getData("text/plain");
//   const taskElement = document.getElementById(taskId);
  
//   // Find the 'tasks' container within the dropped column
//   const dropzone = document.querySelector(`#${columnId} .tasks`);
//   dropzone.appendChild(taskElement);
// }   


// let board = {
//   todo: [],
//   doing: [],
//   done: []
// };

// // 🔹 Add Task
// function addTask(column) {
//   let task = prompt("Task likho:");

//   if (task) {
//     board[column].push(task);
//     render();
//   }
// }

// // 🔹 Delete Task
// function deleteTask(column, index) {
//   board[column].splice(index, 1);
//   render();
// }

// // 🔹 Render (screen pe dikhana)
// function render() {
//   ["todo", "doing", "done"].forEach(col => {
//     let container = document.querySelector(`#${col} .tasks`);
//     container.innerHTML = "";

//     board[col].forEach((task, index) => {
//       let div = document.createElement("div");
//       div.className = "task";

//       div.innerHTML = `
//         ${task}
//         <button onclick="deleteTask('${col}', ${index})">❌</button>
//       `;

//       container.appendChild(div);
//     });
//   });
// }

// // 🔹 First time load
// render();               

// 🔹 Load saved data (IMPORTANT)
let board = JSON.parse(localStorage.getItem("board")) || {
  todo: [],
  doing: [],
  done: []
};

let draggedTask = null;
let draggedFrom = null;

// 🔹 Save function
function saveBoard() {
  localStorage.setItem("board", JSON.stringify(board));
}

// 🔹 Add Task
function addTask(column) {
  let task = prompt("Task likho:");

  if (task) {
    board[column].push(task);
    saveBoard();   // 🔥 save
    render();
  }
}

// 🔹 Delete Task
function deleteTask(column, index) {
  board[column].splice(index, 1);
  saveBoard();   // 🔥 save
  render();
}

// 🔹 Render
function render() {
  ["todo", "doing", "done"].forEach(col => {
    let container = document.querySelector(`#${col} .tasks`);
    container.innerHTML = "";

    board[col].forEach((task, index) => {
      let div = document.createElement("div");
      div.className = "task";

      div.innerHTML = `
        ${task}
        <button onclick="deleteTask('${col}', ${index})">❌</button>
      `;

      // 🔥 DRAG
      div.draggable = true;

      div.ondragstart = () => {
        draggedTask = index;
        draggedFrom = col;
      };

      container.appendChild(div);
    });
  });
}

// 🔹 Drag allow
function allowDrop(e) {
  e.preventDefault();
}

// 🔹 Drop
function drop(e, column) {
  e.preventDefault();

  let task = board[draggedFrom][draggedTask];

  board[draggedFrom].splice(draggedTask, 1);
  board[column].push(task);

  saveBoard();   // 🔥 save after move
  render();
}

// 🔹 First load
render();