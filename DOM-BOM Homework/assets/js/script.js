// ading root variable
document.documentElement.style.setProperty('--btnwidth', '70px');
document.documentElement.style.setProperty('--btnheight', '30px');

// elements
let openBtn = document.createElement('button')
let modalBox = document.createElement("div")
let cancelBtn = document.createElement('button')

// adding text to buttons
openBtn.textContent = "Open"
cancelBtn.textContent = "Cancel"

// giving style to modal
modalBox.style.opacity = "0"
modalBox.style.transition = "opacity 0.2s ease-in-out"
modalBox.style.justifyContent = "center"
modalBox.style.alignItems = "center"
modalBox.style.width = '200px'
modalBox.style.height = '200px'
modalBox.style.backgroundColor = "salmon"
modalBox.style.position = 'relative'
modalBox.style.top = '0'
modalBox.style.left = 'calc(50% - 100px)'

// open button style
openBtn.style.width = "var(--btnwidth)"
openBtn.style.height = "var(--btnheight)"
openBtn.style.position = 'relative'
openBtn.style.top = '0'
openBtn.style.left = 'calc(50% - (var(--btnwidth) / 2))'

// cancel button style
cancelBtn.style.width = "var(--btnwidth)"
cancelBtn.style.height = "var(--btnheight)"
cancelBtn.style.position = 'relative'
cancelBtn.style.top = 'calc(50% - (var(--btnheight) / 2))'
cancelBtn.style.left = 'calc(50% - (var(--btnwidth) / 2))'

// adding elements to the html
document.body.append(openBtn)
document.body.append(modalBox)
modalBox.append(cancelBtn)

// open Button onclick function
openBtn.onclick = () => {
    modalBox.style.opacity = "1"
}

// cancel button onclick function
cancelBtn.onclick = () => {
    modalBox.style.opacity = "0"
}
