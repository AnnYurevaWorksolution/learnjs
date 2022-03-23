/*
Есть дерево, организованное в виде вложенных списков ul/li.
Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов.
Узлы нижнего уровня, без детей – пропускайте.*/

const list = document.getElementById('numbThreads');
const itemsList = list.getElementsByTagName('li');

function counterThreads(list) {
    for(let li of list) {
        let descendantsCount = li.getElementsByTagName('li').length;
        if(!descendantsCount) continue;

        li.firstChild.data +=`[${descendantsCount}]`;
    }
}

counterThreads(itemsList);