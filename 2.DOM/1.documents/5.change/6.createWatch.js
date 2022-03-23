// Цветные часы с использованием setInterval

let start = document.getElementById('start'),
    stop = document.getElementById('stop');

function createWatch() {
    let watch = document.getElementById('watch');
    let date = new Date();
    let hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds  = date.getSeconds();

    if (hours <= 9){
        hours = '0' + hours;
    }
    watch.children[0].innerHTML = hours;

    if (minutes <= 9) {
        minutes = '0' + minutes;
    }
    watch.children[1].innerHTML = minutes;

    if (seconds <= 9) {
        seconds = '0' + seconds;
    }
    watch.children[2].innerHTML = seconds;
}

let timer;

function watchStart() {
    timer = setInterval(createWatch, 1000);
    createWatch();
}

function watchStop() {
    clearInterval(timer);
}

start.addEventListener('click', watchStart);
stop.addEventListener('click', watchStop);