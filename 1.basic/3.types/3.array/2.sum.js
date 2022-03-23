/*
Напишите функцию sumInput(), которая:
Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/

function sumInput() {
    let numbs = [];

    while (true) {
        let numb = prompt('Number:', 0);

        if (numb === "" || numb === null || !isFinite(numb)) break;

        numbs.push(+numb);
    }

    let sum = 0;

    for (let number of numbs) {
        sum += number;
    }

    return sum;
}

sumInput();