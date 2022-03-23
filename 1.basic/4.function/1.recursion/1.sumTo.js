// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// Сделайте три варианта решения:
//     С использованием цикла.
//     Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
//     С использованием формулы арифметической прогрессии.

function sumToC(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

function sumToR(n) {
    if(n <= 1) {
        return 1;
    }

    return n + sumToR(n - 1);
}

function sumToF(n) {
    return n * (n + 1) / 2;
}

alert( sumToC(100) ); // 5050
alert( sumToR(100) ); // 5050
alert( sumToF(100) ); // 5050