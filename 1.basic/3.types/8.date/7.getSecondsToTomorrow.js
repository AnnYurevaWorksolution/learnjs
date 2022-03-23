// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

function getSecondsToTomorrow() {
    let date = new Date();
    let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    let seconds = Math.round((tomorrow - date) / 1000);

    return seconds;
}

getSecondsToTomorrow();