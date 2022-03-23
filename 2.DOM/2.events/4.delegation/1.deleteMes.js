// Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.
// P.S. Используйте делегирование событий.
// Должен быть лишь один обработчик на элементе-контейнере для всего.
const parent = document.getElementById('container');

parent.addEventListener("click", function (event) {
    const btnDel = event.target.closest('.remove-button');

    if (!btnDel) return;

    const pane = event.target.closest('.pane');
    pane.remove();

})
