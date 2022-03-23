/*
Напишите интерфейс для создания списка.

Для каждого пункта:
Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте элемент <li> и добавляйте его к <ul>.
Процесс прерывается, когда пользователь нажимает Esc или вводит пустую строку.
Все элементы должны создаваться динамически.

Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный текст.*/
let list = document.createElement('ul');
document.body.append(list);

while (true) {
    let content = prompt("Элемент списка", '');

    if(!content) break;

    let listItem = document.createElement('li');
    listItem.textContent = content;
    list.append(listItem);
}


