/*
Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.*/

function work(a, b) {
    console.log(this)
    console.log( a + b ); // произвольная функция или метод

    console.log(this.calls)
}

function spy(func) {
    function wrap(...args) {
        wrap.calls.push(args);

        return func.call(wrap,...args)
    }

    wrap.calls = [];

    return wrap;
}

work = spy(work);

"use strict";
let n = null + undefined;
alert( n );
// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//     console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }
