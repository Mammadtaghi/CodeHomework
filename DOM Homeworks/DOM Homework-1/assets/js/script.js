// HTML stuff
const toggle = document.getElementsByClassName('fa-solid')[0]
const subNav = document.getElementsByClassName('subNav')[0]



// Changing between toggle and X // Also display or hide subNav
toggle.addEventListener('click', (e) => {
    e.preventDefault()

    // Changing toggle to X
    if (toggle.classList[1] === 'fa-bars') {
        toggle.classList.remove('fa-bars')
        toggle.classList.add('fa-xmark')

        // displaying subNav
        subNav.style.animation = "fadeDown 1s ease-in-out forwards"
        
        e.stopPropagation()
    }

    // Changing X to toggle
    else if (toggle.classList[1] === 'fa-xmark') {
        toggle.classList.remove('fa-xmark')
        toggle.classList.add('fa-bars')

        // hiding subNav
        subNav.style.animation = "fadeUp 1s ease-in-out backwards"
        
        e.stopPropagation()
    }

})



