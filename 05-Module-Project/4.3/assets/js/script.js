var taskIdCounter = 0;

var formEl = document.querySelector("#task-form");
var tasksToDoEL = document.querySelector("#tasks-to-do");
var tasksInProgressEl = document.querySelector("#tasks-in-progress");
var tasksCompletedEl = document.querySelector("#tasks-completed");
var pageContentEl = document.querySelector("#page-content");

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name'task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // check if inputs are empty (validate)
    if (taskNameInput === "" || taskTypeInput === "") {
        alert("You need to fill out the task form!");
        return false;
    }

    // reset form fields for next task to be entered
    document.querySelector("input[name='task-name]").value = "";
    document.querySelector("select[name='task-type']").selectedIndex = 0;

    // check if task is new one or one being editad by seeing if it has a data-task-id attribute
    var isEdit = formEl.hasAttribute("data-task-id");

    if (isEdit) {
        var taskId = formEl.getAttribute("data-task-id");
        completeEditTask(taskNameInput, taskTypeInput, taskId);
    } else {
        var taskDataObj = {
            name: taskNameInput,
            type: taskTypeInput
        };

        createTaskEl(taskDataObj);
    }
};

var createTaskEl = function(taskDataObj) {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-tiem";
    listItemEl.setAttribute("data-task-id", taskIdCounter);

    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTMLn = "<h3 clss='task-name'>" + taskDataObj.name + "</h3><span clss='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);

    // create task actions (buttons and select) for task
    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);
    tasksToDoEL.appendChild(listItemEl);

    // increse task counter for next uniqus id
    taskIdCounter++;
};

var createTaskActions = function(taskId) {
    // create container to hold elements
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    //create edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);
    actionContainerEl.appendChild(editButtonEl);
    // create delete button 
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);
    actionContainerEl.appendChild(deleteButtonEl);
    // create change status dropdown
    var statusSelectEl = document.createElement("select");
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);
    statusSelectEl.className = "selete-status";
    actionContainerEl.appendChild(statusSelectEl);
    // create status options
    var statusChoices = ["To Do", "In Progress", "Completed"];

    for (var i = 0; i <statusChoices.length; i++) {
        // create option element
        var statusOptionEl = document.createElement("option");
        statusOptionEl.setAttribute("value", statusChoices[i]);
        statusOptionEl.textContent = statusChoices[i];

        // append to select
        statusSelectEl.appendChild(statusOptionEl);
    }

    return actionContainerEl;
};

var completeEditTask = function(taskName, taskType, taskId) {
    // find task list item with taskId value
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

    // set new values 
    taskSelected.querySelector("h3.task-name").textContent = taskName;
    taskSelected.querySelector("span.task-type").taxskContent = taskType;

    alert("Task Updated!");

    // remove data attribute from trom
    formEl.removeAttribute("data-task-id");
    // update formEl button to go back to saying "Add Task" instead of "Edit Task"
    formEl.querySelector("#save-tesk").textContent = "Add Tesk";
};

var tsakButtonHandler = function(event) {
    // get target element from event 
    var targetEl = event.target;

    if (targetEl.matches(".edit-btn")) {
        console.log("edit", targetEl);
        var taskId = targetEl.getAttribute("data-task-id");
        editTask(taskId);
    } else if (targetEl.matches(".delete-btn")) {
        console.log("delete", targetEl);
        var taskId = targetEl.getAttribute("data-task-id");
        deleteTask(taskId);
    }
};

var taskSelectedChangeHandler = function(event) {
    console.log(event.target.value);

    // find task list item based on event.target's data -task-id attribute
    var taskId = event.target.getAttribute("data-task-id");
    var statusValue = event.target.value.toLowerCase()

    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

    // convert value to lower case
    var statusValue = event.target.value.toLowerCase();

    if (statusValue === "to do") {
        tasksToDoEL.appendChild(taskSelected);
    } else if (statusValue === "in progress") {
        tasksInProgressEl.appendChild(taskSelected);
    } else if (statusValue === "completed") {
        tasksCompletedEl.appendChild(taskSelected);
    }
};

var editTask = function(taskId) {
    console.log(taskId);

    // get task list item element 
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

    // get cibtent from task name and type 
    var taskName = taskSelected.querySelector("h3.task-name").textContent;
    console.log(taskName);

    var taskType = taskSelected.querySelector("span.task-type").textContent;
    console.log(taskType);

    // write values of taskname and taskType to form to be edited
    document.querySelector("input[name=']").value = taskName;
    document.querySelector("select[name'task-task-type']").value =taskType;

    // set data attribute to the form with a value of the task's id so it knows which one is being edited
    formEl.setAttribute("data-task-id", taskId);
    // update form's button to reflect editing a task rather than creating a new one
    formEl.querySelector("#save-task").textContent = "Save Task";
};

var deleteTask = function(taskId) {
    console.log(taskId);
    // tind task list element with taskId value and remove it
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    taskSelected.remove();
};

// Create a new task 
formEl.addEventListener("submit", taskFormHandler);

// for edit and delete buttons
pageContentEl.addEventListener("click", tsakButtonHandler);

// for changing the status 
pageContentEl.addEventListener("change", taskSelectedChangeHandler);
