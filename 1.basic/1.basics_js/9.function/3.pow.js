/*
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
*/

function pow(x, n){
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return x;
}

let x = prompt('x?');
let n = prompt('n?');

if (n < 1){
    alert('Error');
} else {
    alert(pow(x, n))
}
