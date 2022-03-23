/*
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.*/

function extractCurrencyValue(str) {
    // return +str.slice(1); - просто решение
    let numb = '';

    for (let symb in str) {
        if(isFinite(str[symb])) {
            numb += str[symb];
        }
    }

    return +numb;
}

alert(extractCurrencyValue('$120'))
alert(extractCurrencyValue('120$'))