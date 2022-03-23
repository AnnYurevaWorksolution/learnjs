/*
Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.*/

function printList(list) {
    console.log(list.value)
    if(list.next) {
        printList(list.next)
    }
}

function printListC(list) {
    while(list) {
        console.log(list.value);
        list = list.next;
    }
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
printList(list);
printListC(list);