/*
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.*/


function filterRangeInPlace(arr, a, b) {
    for (let i = arr.length - 1; i >= 0; --i) {
        if(arr[i] < a || arr[i] > b){
            arr.splice(i, 1);
        }
    }

    return arr;
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4)
