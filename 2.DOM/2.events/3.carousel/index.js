// Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
const carousel = document.getElementById('carousel');
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');
let prevArrow = carousel.querySelector('.prev');
let nextArrow = carousel.querySelector('.next');

let i = 1;
for(let li of listElems) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

let width = 130;
let COUNT = 1;
let POSITION = 0;


prevArrow.addEventListener('click', () => {
    POSITION += width * COUNT;
    POSITION = Math.min(POSITION, 0);
    list.style.marginLeft = POSITION + 'px';
})

nextArrow.addEventListener('click', () => {
    POSITION -= width * COUNT;
    POSITION = Math.max(POSITION, -width * (listElems.length - COUNT));
    list.style.marginLeft = POSITION + 'px';
})