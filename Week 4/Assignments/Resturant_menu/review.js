const taskTextBox = document.getElementById("taskTextBox")
const taskButton = document.getElementById("addButton")
const pendingUL = document.getElementById("pendingUL")
const completedUL = document.getElementById("completedUL")

taskButton.addEventListener("click", function() {
    let taskName = taskTextBox.value

    // create an li 
    const taskLI = document.createElement("li")
    // create a checkbox 
    const checkBox = document.createElement("input")
    // checkBox.type = "checkbox"
    checkBox.setAttribute("type", "checkbox")

    checkBox.addEventListener("change", function() {
        if(this.checked) {
            completedUL.appendChild(this.parentElement)
        } else {
            pendingUL.appendChild(this.parentElement)
        } 
        //console.log(this.checked) 
        // if checkbox is checked then move the item to the completed list 
        //completedUL.appendChild(this.parentElement)
    })

    // create a label 
    const taskLabel = document.createElement("label")
    taskLabel.innerHTML = taskName 
    // create a remove button 
    const removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    removeButton.addEventListener("click", function() {
        console.log(this) // remove button that was clicked
        // remove li from parent 
        this.parentElement.remove() 
        //pendingUL.removeChild(this.parentElement)
    })
    
    taskLI.appendChild(checkBox)
    taskLI.appendChild(taskLabel)
    taskLI.appendChild(removeButton)

    pendingUL.appendChild(taskLI)

    console.log(taskName)
})

/*
 <div>
    <div>
        <img />
        <checkbox />
        <button>
    </div>
    <div>
        <img />
        <checkbox />
        <button>
    </div>
 </div>
*/