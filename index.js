const sections = document.querySelector('.section');
const controlButtonsContainer = document.querySelectorAll('.control-buttons-container');
const controlButtons = document.querySelectorAll('.control-button');
const sectionsContainer = document.querySelector('.main-content');

function pageTransition() {
    // When button clicked, add style to it to make it active.
    // loop through all the buttons to add an event listener 
    for (let i = 0; i < controlButtons.length; i++) { 
        controlButtons[i].addEventListener('click', function () {
            let current_btn = document.querySelector('.active-button');
            current_btn.className = current_btn.className.replace('active-button', '')
            this.className += ' active-button'
        })
    }
}
pageTransition()