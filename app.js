const input = document.querySelector("input"),
    add = document.querySelector("#add");
    todoList = document.querySelector(".todo-list"),
    clear = document.querySelector("#clear");
let tasks;

add.addEventListener("click", addTask);

// Get tasks from the local storage 
function getTasks() {
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
}

function addTask() {
    if (input.value !== "") {
        addTaskToLs();
        todoList.innerHTML = "";
        displayTask();
    } else {
        alert("Please enter a task");
    }
}

// Save a task to the local storage
function addTaskToLs() {
    getTasks();
    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
}

// Display a task on the page
function displayTask() {
    getTasks();
    tasks.forEach((task, index) => {
        const newLi = document.createElement("li");
        const delBtn = document.createElement("button");
        delBtn.innerHTML = `<i class='fas fa-trash-alt' id="$
        {index}" onclick="deleteTask(this.id)"></i>`;

        newLi.appendChild(document.createTextNode(task));
        newLi.appendChild(delBtn);
        todoList.appendChild(newLi);

        // Cross out a complete task
        newLi.addEventListener("click", crossTask);

        function crossTask() {
            newLi.style.textDecorationLine = "line-through";
        };
    });
}

// Delete individual tasks
function deleteTask(index) {
    getTasks();
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    todoList.innerHTML = "";
    displayTask();
}

// Clear all tasks
clear.addEventListener("click", clearTasks);

function clearTasks() {
    localStorage.clear();
    todoList.innerHTML = "";
    displayTask();
}

displayTask();