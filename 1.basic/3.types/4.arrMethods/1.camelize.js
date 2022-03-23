/*
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.*/

function camelize(str) {
    let arr = str.split('-');

    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }

    return arr.join('');
}

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");