const taskTextBox = document.getElementById("taskTextBox")
const taskButton = document.getElementById("addButton")

taskButton.addEventListener("click", function() {
    let taskName = taskTextBox.value

    // 
    const taskLI = document.createElement("li")

    // Check Box function
    const checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")

    checkBox.addEventListener("change", function() {
        if (this.checked) {
            completedUl.appendChild(this.parentElement)
        } else {
            pendingUL.appendChild(this.parentElement)
        }
    })


    // label - item
    const taskLabel = document.createElement("label")
    taskLabel.innerHTML = taskName

    // this is a remove button function!!1
    const removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    removeButton.addEventListener("click", function() {
        // removing an item from parent(list)
        console.log(this)
        this.parentElement.remove()
    })

    taskLI.appendChild(checkBox)
    taskLI.appendChild(taskLabel)
    taskLI.appendChild(removeButton)

    pendingUL.append(taskLI)


    pendingUL.appendChild(taskLI)



    console.log(taskName)
})