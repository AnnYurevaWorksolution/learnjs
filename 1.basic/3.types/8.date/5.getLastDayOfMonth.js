/*
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.*/

function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

alert(getLastDayOfMonth(2012, 1));