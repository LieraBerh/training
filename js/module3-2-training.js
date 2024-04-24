// 1. Напиши функцію, яка приймає довільну кількість чисел і повертає кількість
//    непарних чисел серед них.

console.log('task 1');

function countOdd() {
    let total = 0;
    for (const item of arguments) {
        if (item % 2 !== 0) {
        total++
        }
    }
    return total;
}

console.log(countOdd(1, 2, 3, 4, 5, 6, 7, 8, 9));

// 1. Напиши функцію яка приймає довільну кількість рядочків і повертає той рядок
//    що є найдовшим

console.log('task 2');

function findLongest() {
    let theLongestWord = '';
    for (const word of arguments) {
        if (word.length > theLongestWord.length) {
            theLongestWord = word;
        }
    }
    return theLongestWord
}

console.log(findLongest('hello', 'word', 'test'));

// 1. Напиши функцію яка приймає довільну кількість рядочків і обєднує їх в один
//    цілий рядок.

console.log('task 3-1');

function makeStr() {
    let newString = '';
    for (const string of arguments) {
        newString += string;
    }
    return newString;
}

console.log(makeStr('make ', 'me ', 'a ', 'sandwich'));

console.log('task 3-2');

function makeStrFromArr() {
    let newArr = [];
    for (const item of arguments) {
        newArr.push(item);
    }
    return newArr.join('-');
}

console.log(makeStrFromArr('this', 'time', 'I', 'want', 'some', 'cake'));

// 1. Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нулю то
//    повернути null, в іншому випадку повернути добуток цих двох чисел.

console.log('task 4');

function checkNumbers(a, b) {
    return a === 0 || b === 0 ? null : a * b;
}

console.log(checkNumbers(5, 6));
console.log(checkNumbers(0, 8));
console.log(checkNumbers(3, 0));

// # Функції

// 1. Напиши функцію, яка приймає два параметри (a і b) та повертає їхню суму.
// 1. Напиши функцію, яка приймає три параметри (a, b, c) і повертає максимальне з
//    них.
// 1. Напиши функцію, яка приймає три параметри (число, мінімум і максимум) та
//    повертає true, якщо число знаходиться між мінімумом і максимумом (включно), і
//    false, якщо ні.
// 1. Напиши функцію, яка приймає рядок і повертає перший символ цього рядка.
// 1. Напиши функцію, яка приймає рядок і повертає останній символ цього рядка.
// 1. Напиши функцію, яка приймає число і повертає true, якщо число парне, і false,
//    якщо ні.
// 1. Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нуль то
//    повернути null, в іншому випадку повернути добуток цих двох чисел.
// 1. Напиши функцію яка приймає рядок і повертає цей самий рядок але огорнутий у
//    тег div. Приклад: на вході був рядок `"Hello world"` а на виході рядок
//    `"<div>Hello world<div>"`
// 1. Напиши функцію, яка приймає рядок і повертає кількість слів у ньому (слова
//    розділені пробілами).
// 1. Напиши функцію, яка приймає рядок і повертає його довжину помножену на
//    кількість слів в цьому рядку.
// 1. Напиши функцію, яка приймає рядок і повертає кількість голосних літер у ньому
//    (a, e, i, o, u). Використовуйте метод includes та цикл.
// 1. Напиши функцію, яка приймає рядок і повертає новий рядок, де слова
//    розташовані у зворотному порядку.
// 1. Напиши функцію, яка приймає довільну кількість аргументів і повертає true,
//    якщо всі аргументи є числами, і false, якщо ні.
// 1. Напиши функцію, яка приймає довільну кількість аргументів і повертає їх
//    об'єднаними в один рядок, розділений комами.
// 1. Напиши функцію, яка приймає довільну кількість чисел і повертає їхній
//    добуток.
// 1. Напиши функцію, яка приймає довільну кількість чисел і повертає кількість
//    непарних чисел серед них.
// 1. Напиши функцію яка приймає довільну кількість рядочків і повертає той рядок
//    що є найдовшим
// 1. Напиши функцію яка приймає довільну кількість рядочків і обєднує їх в один
//    цілий рядок.
// 1. Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нулю то
//    повернути null, в іншому випадку повернути добуток цих двох чисел.
// ## Прості задачі

// 1. Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.
// 1. Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у
//    консоль.
// 1. Напиши функцію, яка приймає масив чисел та виводить лише парні числа у
//    консоль.
// 1. Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив
//    чисел. Потрібно вивести лише ті елементи масиву які більші за max.
// 1. Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.
// 1. Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна
//    порахувати скільки разів шуканий елемент зустрічається у масиві.
// 1. Напиши функцію яка приймає масив чисел. Функція повинна видалити усі
//    негативні(відємні числа) з масиву та повернути новий масив.
// 1. Напиши функцію яка приймає масив рядочків. Потрібно змінити кожен елемент
//    масиву наступним чином - якщо довжина рядочку менша за 6 до привести рядок до
//    нижнього регістру, в іншому випадку привести до верхнього регістру.
// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
//    лише непарні числа.
// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне
//    число помножене на індекс, за яким воно знаходиться в масиві.
// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
//    лише числа, які діляться на 3.

// ## Середні задачі

// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
//    де будуть лише ті елементи які зустрічаються і в arr1 і arr2.
// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
//    де будуть лише елементи масиву arr1 яких не має у масиві arr2.
// 1. Напиши функцію яка приймає масив та знаходить мінімальний елемент.
// 1. Напиши функцію яка приймає масив та знаходить максимальний елемент.
// 1. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
//    більші за середнє значення всіх елементів масиву.
// 1. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
//    більші за власний індекс.
// 1. Напишіть функці яка приймає масив чисел. Функція повинна занйти мінімальний
//    елемент та видалити його з масиву.
// 1. Напиши функцію яка приймає два параметри start та end. Функія повина
//    повернути масив де будуть числа з діапазону але лише ті у яких не має
//    цифри 5. К прикладу числа (51, 25, 15,256) не підходять бо містять символ "5"
//    у собі.

// ## Складні

// 1. Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні
//    числа переміщені в початок, а всі непарні - в кінець.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
//    елемент є сумою усіх попередніх елементів.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить
//    лише унікальні числа.
// 1. Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без
//    дублювання елементів.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
//    елемент є середньоарифметичним всіх сусідніх елементів.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де елементи
//    відсортовані в порядку збільшення або зменшення.
// 1. Напиши функцію, яка приймає массив рядочків та їх за довжиною елементів.

// - [Kata #1](https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c)
// - [Kata #2](https://www.codewars.com/kata/563cf89eb4747c5fb100001b)
// - [Kata #3](https://www.codewars.com/kata/5813d19765d81c592200001a)
// - [Kata #4](https://www.codewars.com/kata/62ad72443809a4006998218a)
// - [Kata #5](https://www.codewars.com/kata/53b2ff49b82af296ce001139)
// - [Kata #6](https://www.codewars.com/kata/58f8a3a27a5c28d92e000144)
// - [Kata #7](https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118)
// - [Kata #8](https://www.codewars.com/kata/5a905c2157c562994900009d)
// - [Kata #9](https://www.codewars.com/kata/57d814e4950d8489720008db)
// - [Kata #10](https://www.codewars.com/kata/5a2be17aee1aaefe2a000151)
// - [Kata #11](https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0)

