// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(users) {
    let sumAge = 0;
    let current = 0;

    for (let i = 0; i < users.length; i++) {
        if(users[i].age){
            sumAge += +users[i].age;
            current++;
        }
    }

    return sumAge / current;

    // return arr.reduce((prev, user) => prev + user.age, 0) / users.length
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28