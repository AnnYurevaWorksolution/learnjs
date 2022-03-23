/*
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

Функция должна возвращать новый массив и не изменять исходный.*/

function filterRange(arr, a, b) {
    /*let newArr = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= a && arr[i] <= b) {
            newArr.push(arr[i]);
        }
    }

    return newArr;*/

    return arr.filter(item => item >= a && item <= b);
}


let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);
