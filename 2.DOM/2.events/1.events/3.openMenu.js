// Создать меню, которое по нажатию открывается либо закрывается:
let button = document.querySelector('.list-button');
let menu = document.querySelector('.list-wrap');

button.addEventListener('click', () => {
    menu.classList.toggle('open');
})