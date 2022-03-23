/*
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0».*/

function getMaxSubSum(arr) {
    let maxSum = 0;
    let sum = 0;

    for(let item of arr) {
        sum += item; //собираем сумму
        console.log(sum);
        maxSum = Math.max(maxSum, sum); //запоминаем максимум на данный момент
        console.log(maxSum)
        if(sum < 0) {//если сумма элементов становится меньше нуля,
            sum = 0;//то обновляем текущую сумму, для поиска вариантов возможной большей суммы
        }
    }
    console.log(maxSum);
    return maxSum;
}

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         let sumFixed = 0;
//         for (let j = i; j < arr.length; j++) {
//             sumFixed += arr[j];
//             maxSum = Math.max(maxSum, sumFixed);
//         }
//     }
//
//     console.log(maxSum);
//     return maxSum;
// }

// getMaxSubSum([-1, 2, 3, -9]) // 5
// getMaxSubSum([2, -1, 2, 3, -9]) // 6
getMaxSubSum([-1, 2, 3, -2, 11]) // 11
// getMaxSubSum([-2, -1, 1, 2]) // 3
// getMaxSubSum([100, -9, 2, -3, 5]) // 100
// getMaxSubSum([1, 2, 3]) // 6