let menu_button = document.getElementById('hamburger_menu')
let navbar_buttons = document.getElementById('navbar_buttons')
let header = document.getElementById('header')
let on = 0

menu_button.parentElement.addEventListener('click', () => {
    if (on) {
        navbar_buttons.style.height = '0'
        navbar_buttons.style.marginTop = '0'
        header.style.alignItems = 'center'
        on = 0
    }
    else {
        navbar_buttons.style.height = '25vh'
        navbar_buttons.style.marginTop = '2vh'
        header.style.alignItems = 'baseline'
        on = 1
    }
})