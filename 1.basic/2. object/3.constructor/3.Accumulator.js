/*
Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.*/

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('num', 0);
        console.log(this.value);
    };
}

let acc = new Accumulator(1)
acc.read();
acc.read();
acc.read();