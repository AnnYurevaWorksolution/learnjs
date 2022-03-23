/*
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.*/
function unique(arr) {
    let newArr = [];

    for (let str of arr) {
        if(!newArr.includes(str)) {
            newArr.push(str);
        }
    }

    return newArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O