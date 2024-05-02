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

//TODO:============task-03=========================
// Перевірте чи співпадає введений пароль password із збереженим паролем.
// Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів. Результатом виразу перевірки повинно бути true,
// якщо значення збігаються, і false - якщо ні.

// const clientPassword = prompt("Enter your password");
// const userName = prompt("Enter your name");

// function checkPassword(password, user) {
//   const userPassword = "Admin";
//   return userPassword === password
//     ? `Hello admin ${user}`
//     : `Access denied ${user}`;
// }

// alert(checkPassword(clientPassword, userName));


//TODO:============task-05=========================
// Написати функцію, яка приймає рядок і повертає кількість голосних літер у цьому рядку.

// const vowels = ['a', 'e', 'i', 'o', 'u'];

// function countVowels(string) {
//     let count = 0;
//     for (const letter of string) {
//         if (vowels.includes(letter.toLowerCase())) {
//             count++
//         }
//     }
//     return count;
// }

// console.log(countVowels('hello world test'));

//TODO:============task-06=========================
// Знайти перший парний елемент масиву, який більший за 10, використовуючи цикл for з оператором break та continue.

// function findEven(array) {
//     let evenNumber = 0;
//     for (const number of array) {
//        if (number % 2 !== 0) {
//            continue;
//        } else if (number % 2 === 0 && number > 10) {
//            evenNumber += number;
//            break;
//     }
//     }
//     return `First even number - ${evenNumber}`;
// }
// console.log(findEven([6, 7, 8, 9, 10, 11, 12, 13]));

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swimming", "music", "sci-fi"],
};

const location = user.location;
console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

const country = user.location.country;
console.log(country); // "Jamaica"

const hobbies = user.hobbies;
console.log(hobbies); // ["swimming", "music", "sci-fi"]

const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swimming"

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3
