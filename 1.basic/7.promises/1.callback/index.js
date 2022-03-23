/*Напишите функцию showCircle(cx, cy, radius), которая будет рисовать постепенно растущий круг.
cx,cy – координаты центра круга относительно окна браузера,
radius – радиус круга.
В том решении функция showCircle(cx, cy, radius) рисовала круг, но способа узнать, что всё нарисовано, не было.

Поэтому добавим в параметры колбэк: showCircle(cx, cy, radius, callback), который выполним, когда анимация будет завершена.
Функция callback будет добавлять в наш круг <div> элемент с сообщением.*/

function go() {
    showCircle(150, 150, 100, createDiv);
}

function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
            div.removeEventListener('transitionend', handler);
            callback(div);
        })
    });
}

function createDiv(div) {
    div.classList.add('message-ball');
    div.innerText = 'Hello, world!'
}