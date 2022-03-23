// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str) {
    if (!str) return str
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('aaaaaaaa'));