document.addEventListener("DOMContentLoaded", () => {
    const datetimeElement = document.getElementById("datetime");
    const taskForm = document.getElementById("todo-form");
    const taskInput = document.getElementById("taskInput");
    const dueDateInput = document.getElementById("dueDate");
    const taskList = document.getElementById("taskList");

    // Update the live clock every second
    function updateDateTime() {
        const now = new Date();
        datetimeElement.textContent = now.toLocaleString();
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();

    // Add new task
    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const taskTitle = taskInput.value.trim();
        const dueDate = dueDateInput.value;

        if (taskTitle === "" || dueDate === "") return;

        const taskItem = document.createElement("li");
        taskItem.className = "task-item";

        const taskDetails = document.createElement("div");
        taskDetails.className = "task-details";

        const titleEl = document.createElement("span");
        titleEl.textContent = taskTitle;

        const dueEl = document.createElement("span");
        dueEl.className = "due";
        dueEl.textContent = "Due: " + new Date(dueDate).toLocaleString();

        taskDetails.appendChild(titleEl);
        taskDetails.appendChild(dueEl);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";
        deleteBtn.title = "Delete Task";
        deleteBtn.addEventListener("click", () => {
            taskItem.remove();
        });

        taskItem.appendChild(taskDetails);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);

        // Reset form
        taskForm.reset();
    });
});
