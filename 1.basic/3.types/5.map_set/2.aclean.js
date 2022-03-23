/*
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
nap - pan
ear - are - era
cheaters - hectares - teachers*/

function aclean(arr) {
    let map = new Map();

    for(let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted,word);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );
