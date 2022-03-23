/*
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.*/

// function printNumbers(from, to) {
//     let numb = from;
//     let timer = setInterval(() => {
//         alert(numb);
//
//         if(numb === to){
//             clearInterval(timer);
//         }
//
//         numb++;
//     }, 1000)
// }

function printNumbers(from, to) {
    let numb = from;

    setTimeout(function go() {
        alert(numb);

        if (numb < to) {
            setTimeout(go,1000)
        }

        numb++;
    }, 1000)
}

printNumbers(1, 5);