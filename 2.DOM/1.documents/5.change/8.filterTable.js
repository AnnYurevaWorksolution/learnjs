//Напишите код для сортировки по столбцу "name".
const table = document.getElementById('tableUser');
let row = table.querySelectorAll('tr')
let arr = Array.from(row);
arr.splice(0, 1);

arr.sort((a, b) => {
    //сравниваем первые ячейки из строк
    let tdA = a.querySelector('td').textContent;
    let tdB = b.querySelector('td').textContent;

    //делаем проверку и меняем местами строки
    if(tdA < tdB) {
        a.after(b);
        return 1;
    } else {
        b.after(a);
        return -1;
    }
})