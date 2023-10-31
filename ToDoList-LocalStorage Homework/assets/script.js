// HTML stuff
const input = document.getElementById('input')
const addBtn = document.getElementById('addBtn')
const toDoDiv = document.getElementById('toDoDiv')
const clearBtn = document.getElementById('clearBtn')

// An Array to store text coming from input
let data = []

// addBtn clicking Event
addBtn.addEventListener('click', (e) => {
    e.preventDefault()

    // If nothing has writen to input
    if (input.value === '') {
        alert('Add Something')
        return
    }

    // If addBtn is in Add value
    if (addBtn.value === 'Add') {
        createToDo(input.value)
    }

    // Adding text to localStorage
    localStorage.setItem('ToDo', JSON.stringify(data))
})

// Getting our list back if it is stored in localStorage
const list = JSON.parse(localStorage.getItem('ToDo'))
if (list) {
    for (const i of list) {
        createToDo(i)
    }
}

// Clear Event
clearBtn.addEventListener('click', (e) => {
    e.preventDefault()

    // Clear localStorage
    data = []

    localStorage.setItem('ToDo', JSON.stringify(data))

    toDoDiv.innerHTML = ""

})

// A function to make code shorter
function createToDo(i) {

    // Creating span, checkBox, and a div to store them
    let box = document.createElement('div')
    let inputBox = document.createElement('div')
    let span = document.createElement('span')
    let checkbox = document.createElement('input')
    let editBtn = document.createElement('input')

    // Changing types of some inputs
    checkbox.type = 'checkbox'
    editBtn.type = 'button'

    // Set editBtn value to Edit
    editBtn.value = "Edit"

    // Giving style to div
    box.style.display = 'flex'
    box.style.justifyContent = 'space-between'
    box.style.minWidth = '220px'
    box.style.borderTop = '1px solid black'
    box.style.borderBottom = '1px solid black'
    box.style.margin = '5px 0px'
    box.style.backgroundColor = 'rgba(100, 200, 100, 0.4)'

    // Giving style to span
    span.style.fontFamily = 'Arial,sans'
    span.style.fontSize = '20px'

    // Getting input value to span
    span.innerHTML = i

    // Getting items in place
    inputBox.append(checkbox, editBtn)
    box.append(span, inputBox)
    toDoDiv.append(box)

    // Edit Button event
    editBtn.addEventListener('click', (e) => {
        e.preventDefault()

        // If addBtn value is Edit


        // Get text to the input
        input.value = span.innerText

        // Save span previos value for later use
        let oldTodo = span.textContent

        // Set addBtn value to Edit
        addBtn.value = "Edit"

        addBtn.addEventListener('click', (e) => {
            e.preventDefault()

            if (addBtn.value === 'Edit') {

                // Get new value from input to span
                span.innerText = input.value

                // get new value to localStorage
                const list = JSON.parse(localStorage.getItem('ToDo'))

                // Check every element in LocalStorage
                for (let i = 0; i < list.length; i++) {
                    if (list[i] === oldTodo) {
                        console.log(i);
                        data[i] = span.innerText
                        console.log(data);
                    }
                    
                }
                

                // At the end change addBtn value back to Add
                addBtn.value = 'Add'

                e.stopPropagation()

            }
        })
    })

    // In motion
    checkbox.addEventListener('change', (e) => {
        e.preventDefault()

        // line through if checked
        if (checkbox.checked) {
            span.style.textDecoration = 'line-through'
            box.style.backgroundColor = 'rgba(200, 100, 100, 0.4)'

        }
        // clear when not checked
        else {
            span.style.textDecoration = 'none'
            box.style.backgroundColor = 'rgba(100, 200, 100, 0.4)'

        }
    })

    // Set all data to array
    data.push(i)
}