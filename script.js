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

        // --- Buttons ---
        // Complete button
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✔️";
        completeBtn.title = "Mark as Completed";
        completeBtn.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
        });

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "✏️";
        editBtn.title = "Edit Task";
        editBtn.addEventListener("click", () => {
            const newTitle = prompt("Edit Task Title:", titleEl.textContent);
            if (newTitle !== null && newTitle.trim() !== "") {
                titleEl.textContent = newTitle.trim();
            }
            const newDueDate = prompt("Edit Due Date (YYYY-MM-DD HH:MM):", dueDate);
            if (newDueDate !== null && newDueDate.trim() !== "") {
                dueEl.textContent = "Due: " + new Date(newDueDate).toLocaleString();
            }
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";
        deleteBtn.title = "Delete Task";
        deleteBtn.addEventListener("click", () => {
            taskItem.remove();
        });

        // Append
        taskItem.appendChild(taskDetails);
        taskItem.appendChild(completeBtn);
        taskItem.appendChild(editBtn);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);

        // Reset form
        taskForm.reset();
    });
});

