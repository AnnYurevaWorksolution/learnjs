// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

const elem = document.getElementById('elem')

function clear(elem) {
    elem.innerHTML = '';
}

clear(elem);