const input = document.querySelector("input"),
    add = document.querySelector("#add");
    todoList = document.querySelector(".todo-list"),
    clear = document.querySelector("#clear");


const addTask = (e) => {
    e.preventDefault(e);
    const newLi = document.createElement("li");
    const delBtn = document.createElement("button");

    delBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";

    if (input.value !== "") {
        newLi.textContent = input.value;
        newLi.appendChild(delBtn);
        todoList.appendChild(newLi);
        input.value = "";
    } else {
        alert("Please enter a task");
    }

    newLi.addEventListener("click", function() {
        newLi.style.textDecorationLine = "line-through";
    });

    delBtn.addEventListener("click", function() {
        // const del = confirm("Are you sure you want to delete this task?");
        // if (del === true) {
            const parent = this.parentNode;
            parent.remove();
        // }
    }
)};

add.addEventListener("click", addTask);

clear.addEventListener("click", () => {
    todoList.innerHTML = "";
});


