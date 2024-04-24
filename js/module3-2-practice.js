//TODO:============task-02==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

// function min(a, b) {
     
//     if (typeof a === 'number' && typeof b === 'number') return a > b ? b : a;

//     return 'Arguments are not numbers';
// }
// console.log(min(23, 45));
// console.log(min('hello', 4));

//TODO:============task-03==============
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']


// function logItems(array) {

//     let result = '';

//     for (let i = 0; i < array.length; i++) {

//         result += `${i + 1} - ${array[i]}\n`
//     }

//     return result;
// }

// console.log(logItems(['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']));


//TODO:=============task-04=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив

// const array = [1, 2, 3, 4, 5, 6];

// function sumArray(arr = []) {
//     if (!Array.isArray(arr)) return 'error';

//     let newArray = [];

//     for (let i = 0; i < arr.length - 1; i++) {

//         newArray.push(arr[i] + arr[i + 1]);
//     }
//     return newArray;
// }

// console.log(sumArray(array));

//TODO:=========task-05=================
//Напишіть функцію calculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function calculateAverage() {
    
//     let result = 0;
//     let count = 0;

//     for (const number of arguments) {

//         if (typeof number !== 'number') {
//         continue
//     }
//         result += number;
//         count += 1;
//     }
//     return result / count;
// }

// console.log(calculateAverage(10, 20, 30, "40px"));

