const sections = document.querySelector('.section');
const controls_container = document.querySelectorAll('.controls');
const control_btns = document.querySelectorAll('.control-btn'); 
const sections_container = document.querySelector('.main-content');

function  pageTransition() {
    // When button clicked, add style to it to make it active.
    for(let i = 0; i < control_btns.length; i++){
        control_btns[i].addEventListener('click', () => {
            let current_btn = document.querySelectorAll('.active-btn');
            current_btn[0].className = current_btn[0].className.replace('active-btn', '')
            this.className += 'active-btn'
        } )
    } 
}
pageTransition()