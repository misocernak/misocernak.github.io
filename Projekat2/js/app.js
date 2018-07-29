const taskBtn = document.querySelector("#btn");
const clearBtn = document.querySelector("#btn2");
const srcInp = document.querySelector("#searchTab");
const allTasks = document.querySelector("#tasksUL");

document.addEventListener('DOMContentLoaded', getTasks);
taskBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", removeAllTasks);
allTasks.addEventListener("click", removeTask);
srcInp.addEventListener("keyup", filterTasks);

function getTasks() {
    const allTasks = document.querySelector("#tasksUL");
    allTasks.innerHTML = localStorage.getItem(`task`)
}

function addTask() {
    const taskInp = document.querySelector("#inp1");
    if (taskInp.value == null) {
        alert(`You have to write some task!`);
    } else {
        const allTasks = document.querySelector("#tasksUL");
        allTasks.innerHTML += `<li class="taskItem">`+ taskInp.value + `<i class="fa fa-close deleteTask"></i></li>`
        store();
        taskInp.value = null;
    }
}

function removeAllTasks() {
    const allTasks = document.querySelector("#tasksUL");
    localStorage.clear();
    let listItems = allTasks.getElementsByTagName(`li`);
    if (confirm(`Are you sure that you want to delete all your tasks?`)) {
        while (listItems.length > 0) {
            allTasks.removeChild(listItems[0]);
        }
    }
}

function removeTask(e) {
    let item = e.target.parentNode;
    if (item.classList.contains(`taskItem`) && confirm(`Are you sure that you want to delete task?`)) {
        item.parentNode.removeChild(item);
    }
    store();
}

function store() {
    localStorage.task = allTasks.innerHTML;
}

function filterTasks(filterInput) {
    const text = filterInput.target.value.toLowerCase();
    document.querySelectorAll('.taskItem').forEach
        (function (task) {
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
}
