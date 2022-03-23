/*
Как найти?…

Таблицу с id="age-table".
Все элементы label внутри этой таблицы (их три).
Первый td в этой таблице (со словом «Age»).
Форму form с именем name="search".
Первый input в этой форме.
Последний input в этой форме.*/

// Таблицу с id="age-table"
let table = document.getElementById('age-table');
let table_ = document.querySelector('#age-table');
console.log(table);
console.log(table_);

// Все элементы label внутри этой таблицы (их три).
let labels = table.getElementsByTagName('label');
let labelsList = document.querySelectorAll('#age-table label');
console.log(labels);
console.log(labelsList);

// Первый td в этой таблице (со словом «Age»).
let item = table.getElementsByTagName('td')[0];
let item_ = table.querySelector('td');
console.log(item);
console.log(item_);

// Форму form с именем name="search".
let form = document.getElementsByName('search')[0];
let form_ = document.querySelector('form[name="search"]');
console.log(form);
console.log(form_);

// Первый input в этой форме.
let input = form.querySelector('input');
let input_ = form.getElementsByTagName('input')[0];
console.log(input);
console.log(input_);

// Последний input в этой форме.
let inputs = form.querySelectorAll('input') // найти все input
console.log(inputs[inputs.length-1]);
