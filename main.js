function addTask() {
    var taskInput = document.getElementById("taskInput")
    var taskList = document.getElementById("taskList")

    if  (taskInput.value === " ") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    var checkBox = document.createElement("input")
    checkBox.type = "checkbox";
    checkBox.classList.add("check-button");
    checkBox.onclick = function () {
        li.style.textDecoration = checkBox.checked ? "line-through" : "none";
    };
var taskText = document.createElement("span")
    taskText.textContent = taskInput.value;

    var deleteButton = document.createElement("Button")
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function () {
        taskList.removeChild(li)
    };

    li.appendChild(checkBox)
    li.appendChild(taskText)
    li.appendChild(deleteButton)
    taskList.appendChild(li)

    taskInput.value = '';
}