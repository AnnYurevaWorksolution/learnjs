/*
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.*/

function topSalary(salaries) {
    let name = null;
    let salary = 0;

    for (let [key, value] of Object.entries(salaries)) {
        if(salary <= value) {
            [name, salary] = [key, value];
        }
    }

    return name;
}


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

topSalary(salaries);