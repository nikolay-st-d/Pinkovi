let menu_button = document.getElementById('hamburger_menu')
let navbar_buttons = document.getElementById('navbar_buttons')

menu_button.addEventListener('click', () => {
    menu_button.style.display = 'none'
    navbar_buttons.style.display = 'flex'
})

console.log('wow')