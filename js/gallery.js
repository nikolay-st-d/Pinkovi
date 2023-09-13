let close_button = document.getElementById('close')
let left_button = document.getElementById('left')
let right_button = document.getElementById('right')
let image = document.getElementById('image')
let popup = document.getElementById('popup')
let all_images = document.querySelectorAll('.images img')
let current_image = 0

function close_image() {
    popup.style.display = 'none'
}

function go_left() {
    current_image -= 1
    if (current_image == -1){
        current_image = all_images.length - 1
    }
    image.src = all_images[current_image].src
} 

function go_right() {
    current_image += 1
    if (current_image == all_images.length){
        current_image = 0
    }
    image.src = all_images[current_image].src
} 

close_button.addEventListener('click', close_image)
left_button.addEventListener('click', go_left)
right_button.addEventListener('click', go_right)

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		close_image()
    } 
    else if(event.key === "ArrowLeft"){
        go_left()
    }
    else if(event.key === "ArrowRight"){
        go_right()
    }
});

for (let i = 0; i < all_images.length; i++){
    let img = all_images[i]
    img.addEventListener('click', () => {
        current_image = i
        image.src = img.src
        popup.style.display = 'flex'
    })
}