// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

let buttonHidden = document.getElementById('hiddenText');
let text = document.getElementById('text');

buttonHidden.addEventListener('click', () => {
    text.hidden = true;
})