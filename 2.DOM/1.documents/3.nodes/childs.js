/*
У нас есть дерево, структурированное как вложенные списки ul/li.

Напишите код, который выведет каждый элемент списка <li>:
Какой в нём текст (без поддерева) ?
Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?*/

const list = document.querySelector('ul');
const listItems = list.querySelectorAll('li')

for(let li of listItems) {
    let text = li.firstChild.data;
    let count = li.getElementsByTagName('li').length;
    console.log(text);
    console.log(count);
}

const listLength = listItems.length;
console.log(listLength);
