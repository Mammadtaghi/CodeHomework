// Adding HTML Stuff
const tbody = document.getElementById('tBody')
const add = document.getElementById('add')

// Dynamic Variables (Inputs)
let fName = document.getElementById('fName')
let lName = document.getElementById('lName')
let age = document.getElementById('age')
let no = document.getElementById('no') // Radio Button(inputs)
let yes = document.getElementById('yes') // Radio Button(inputs)

// Creating Person Object
const Person = {
    firstName: "",
    lastName: "",
    years: "",
    married: "",
}

// When Clicking on submit Button 
add.addEventListener('click', (event) => {
    event.preventDefault()
    
    // Creating a Person object to Store data dynamic
    Person.firstName = fName.value
    Person.lastName = lName.value
    Person.years = age.value
    Person.married = no.checked ? "No" : yes.checked ? "Yes" : null;
    
    // Creating a row 
    let tr = document.createElement('tr')

    // I was just testing
    console.log(Person.firstName, Person.lastName, Person.years, Person.married);

    // True False logic to avoid adding empty rows
    let isAllFilled = false

    // A for in loop to take and store data from object to <td>
    for (let i in Person) {
        let td = document.createElement('td')
        
        // If all elements have a valid value
        if (Person.firstName && Person.years && Person.lastName && Person.married) {
            isAllFilled = true
            td.append(Person[i])
            tr.append(td)
        }
    }
    // True False Logic
    if (isAllFilled) {
        tbody.append(tr)
    }
})

// trying to reset input text after clicking (no time)

// fName.innerHTML = ""
// lName.textContent = ""
// age.textContent = ""
