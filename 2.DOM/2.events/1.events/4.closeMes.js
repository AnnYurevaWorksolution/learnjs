// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

let panes = document.querySelectorAll('.pane');

function createButton(elem) {
    let button = document.createElement('button');

    button.className = "remove-button";
    button.innerHTML = '&times;';
    elem.append(button);
    button.addEventListener("click", ()=> {
        elem.remove();
    })
}

panes.forEach((pane) => {
    createButton(pane);
})
