// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

function factorial(n) {
    if(n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

alert( factorial(5) ); // 120