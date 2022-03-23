/*
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

    Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:*/

function getSecondsToday() {
    let date = new Date();
    let startDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let seconds = Math.round((date - startDay) / 1000);

    return seconds;
}

getSecondsToday();