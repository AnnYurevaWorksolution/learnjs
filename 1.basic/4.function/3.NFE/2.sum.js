/*
Напишите функцию sum, которая бы работала следующим образом:
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15*/

function sum(a) {
    let currSum = a;

    function f(b) {
        currSum += b;

        return f;
    }

    f.toString = function() {
        return currSum;
    };

    return f;
}

alert(sum(1)(2));
alert(sum(1)(2)(3));