// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const newId = nextId;
    nextId++;
    localStorage.setItem('nextId', JSON.stringify(nextId));
    return newId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskCard = document.createElement("div");
    taskCard.setAttribute("class", "taskCard");
    let taskId = task.id;
    taskCard.setAttribute('id', `taskId-${taskId}`);
    const taskCardheader = document.createElement('div');
    taskCardheader.setAttribute('class', 'taskCardheader');
    const taskTitle = document.createElement('h4');
    taskTitle.textContent = task.title;
    taskTitle.setAttribute('id', 'taskTitle');
    const taskDescription = document.createElement('p');
    taskDescription.textContent = task.description;
    taskDescription.setAttribute('id', 'taskDescription');
    const taskDueDate = document.createElement('p');
    taskDueDate.textContent = task.dueDate;
    taskDueDate.setAttribute('id', 'taskDueDate');

    taskCard.setAttribute('id', `taskId-${taskId}`)

    taskCardheader.appendChild(taskTitle);
    taskCard.appendChild(taskCardheader);
    taskCard.appendChild(taskDescription);
    taskCard.appendChild(taskDueDate);

    const taskStatus = task.status
    let taskColumn = document.getElementById(`${taskStatus}-cards`)
    taskColumn.appendChild(taskCard);
    renderTaskList();

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    $('.taskCard').draggable({
        revert: 'invaild',
        zIndex: 100,
    });
}
// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();

    const title = $('#taskTitle').val().trim();

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
