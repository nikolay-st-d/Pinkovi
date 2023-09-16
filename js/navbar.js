let menu_button = document.getElementById('hamburger_menu')
let navbar_buttons = document.getElementById('navbar_buttons')
let header = document.getElementById('header')
let on = 0

menu_button.parentElement.addEventListener('click', () => {
    if (on) {
        navbar_buttons.style.height = '0'
        navbar_buttons.style.width = '0'
        navbar_buttons.style.margin = '0'
        navbar_buttons.style.marginTop = '0'
        on = 0
    }
    else {
        navbar_buttons.style.height = '25vh'
        navbar_buttons.style.marginTop = '2vh'
        navbar_buttons.style.width = '95vw'
        navbar_buttons.style.margin = '0'
        on = 1
    }
})