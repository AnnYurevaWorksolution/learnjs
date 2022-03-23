// Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:
/*
Требования:
Использовать только один обработчик событий (применить делегирование)
Клик вне текста заголовка (на пустом месте) ничего делать не должен.*/
const tree = document.getElementById('tree');
let item = tree.querySelectorAll('li');

for (let li of item) {
    const span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
}

tree.addEventListener('click', function (event) {
    const item = event.target.closest('span');
    const checkChild = item.parentNode.querySelector('ul');

    if(!checkChild) {
        return;
    }

    checkChild.hidden = !checkChild.hidden;
})