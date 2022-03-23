/*Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым.
Уведомление должно автоматически исчезнуть через 1,5 секунды.*/

function showNotification({top, right, className, html}, time) {
    let notification = document.createElement('div');
    notification.className = "notification";

    if (className) {
        notification.classList.add(className);
    }

    notification.style.top = `${top}px`;
    notification.style.right = right + 'px';

    notification.textContent = html;
    document.body.append(notification);

    setTimeout(() => notification.remove(), time);
}

showNotification({
    top: 100,
    right: 100,
    html: 'Hello',
    className: "welcome"
}, 1500);