'use strict';
let a = [1, 2, 3];
a.something = 5;

alert(a.something);

function highestRank(arr){
    let obj = {};

    for(let i = 0; i< arr.length; i++) {
        if(!obj[arr[i]]){
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] += 1;
        }
    }

    let valueMax = 0;
    let countMax = 0;

    for(let element in obj){
        if(obj[element] >= countMax){
            valueMax = Math.max(element,valueMax)
            countMax = Math.max(obj[element],countMax)
        }
    }

    return valueMax;
}

let arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
highestRank(arr);