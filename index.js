const sections = document.querySelectorAll('.section');
const controlButtonsContainer = document.querySelectorAll('.control-buttons-container');
const controlButtons = document.querySelectorAll('.control-button');
const sectionsContainer = document.querySelector('.main-content');

function pageTransition() {
    // When button clicked, add style to it to make it active.
    // loop through all the buttons to add an event listener 
    for (let i = 0; i < controlButtons.length; i++) { 
        controlButtons[i].addEventListener('click', function () {
            // select button with the active class to be the current button
            let current_btn = document.querySelector('.active-button'); 
            // remove the active-button in the current button when another button is clicked
            current_btn.classList.remove('active-button')
            // set clicked button to be new active button
            this.classList.add('active-button')
        })
    }

    //Loop through the all the elements inside the main content or sections wrapper
    sectionsContainer.addEventListener("click", (e) => {
        const id = e.target.dataset.id
        console.log(id)
        if (id) {
            // hide other sections if it is not active
            sections.forEach((section) => {
                section.classList.remove('active-section')
            })
            // add active-section to selected section by getting the id
            const element = document.getElementById(id);
            element.classList.add('active-section')
        }
    })
}
pageTransition()