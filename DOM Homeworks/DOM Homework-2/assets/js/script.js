//HTML stuff
const accordionHead = document.getElementsByClassName("accordionHead")
const accordionBody = document.getElementsByClassName("accordionBody")

// accordionHead count
let len = accordionHead.length

// Reset the opacity for every accordionBody
accordionBody[0].style.height = '0'
accordionBody[1].style.height = '0'
accordionBody[2].style.height = '0'

// The clicking event for every accordionHead
for (let i = 0; i < len; i++) {
    accordionHead[i].addEventListener('click', (e) => {
        e.preventDefault()

        // A variable to check height
        let AccHeight = accordionBody[i].style.height

        // 100% height if its 0
        if (AccHeight === "0px") {

            AccHeight = 'fit-content'
            accordionBody[i].style.height = AccHeight
        }
        // 0 height if its 100%
        else if (AccHeight === 'fit-content') {

            AccHeight = '0px'
            accordionBody[i].style.height = AccHeight
        }

        // Hide other accordions
        switch (i) {
            case 0:
                accordionBody[1].style.height = 0
                accordionBody[2].style.height = 0
                break;

            case 1:
                accordionBody[0].style.height = 0
                accordionBody[2].style.height = 0
                break;

            case 2:
                accordionBody[1].style.height = 0
                accordionBody[0].style.height = 0
                break;
        }

    })
}

// 'canNotFindAName 1s ease-in-out forwards;'