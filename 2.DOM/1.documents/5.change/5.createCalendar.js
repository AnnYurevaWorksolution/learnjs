/*
Напишите функцию createCalendar(elem, year, month).
Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.
Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>.
У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.*/

let calendar = document.getElementById('calendar')

function createCalendar(elem, year, month) {
    elem.style.textAlign = "right";
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
    let mon = month - 1;
    let date = new Date(year, mon);
    let day = getDay(date);

    for (let i = 0; i < day; i++) {
        table += '<td></td>';
    }

    while (date.getMonth() === mon) {

        table += '<td>' + date.getDate() + '</td>';
        if (getDay(date) % 7 === 6) {
            table += '</tr><tr>';
        }
        date.setDate(date.getDate() + 1);

    }
    if (day !== 0) {
        for (let i = getDay(date); i < 7; i++) {
            table += '<td></td>';
        }
    }
    table += '</tr></table>';

    elem.innerHTML = table;
}

function getDay(date) {
    let day = date.getDay();
    if (day === 0) day = 7;
    return day - 1;
}

createCalendar(calendar, 2012, 9);