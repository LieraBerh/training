// ## Task 1

// Яким буде результат виразів?

// ```js
// console.log(1 && 5);
// console.log(5 && 1);
// console.log(0 && 2);
// console.log(2 && 0);
// console.log('' && 'Mango');
// console.log('Mango' && '');
// console.log('Mango' && 'Poly');
// console.log('Poly' && 'Mango');

// console.log(true || false);
// console.log(false || true);
// console.log(true || true);

// console.log(3 || false);
// console.log(false || 3);
// console.log(3 || true);
// console.log(true || 3);

// console.log(!true);
// console.log(!false);
// console.log(!3);
// console.log(!'Mango');
// console.log(!0);
// console.log(!'');

// const isOnline = true;
// const isNotOnline = !isOnline;

// console.log(true && false);
// console.log(false && true);
// console.log(true && true);
// console.log(false && false);

// console.log(true || false);
// console.log(false || true);
// console.log(true || true);
// console.log(false || false);

// console.log(!true);
// console.log(!false);
// console.log(!!true);
// console.log(!!false);

// console.log(1 === 1 && 2 === 2);
// console.log(1 === 2 && 2 === 2);
// console.log(1 === 1 || 2 === 2);
// console.log(1 === 2 || 2 === 2);

// console.log(1 > 2 && 2 < 3);
// console.log(1 < 2 && 2 < 3);
// console.log(1 > 2 || 2 < 3);
// console.log(1 < 2 || 2 < 3);

// console.log(0 && 3);
// console.log(3 && 0);
// console.log(0 || 3);
// console.log(3 || 0);

// console.log('' || 'apple');
// console.log('orange' || '');
// console.log('' && 'banana');
// console.log('grape' && '');

// console.log(0 || false);
// console.log(false || 0);
// console.log(1 && 'cherry');
// console.log('banana' && 1);
// console.log(null && 'pear');
// console.log('peach' && undefined);
// console.log(undefined || 'plum');
// console.log('melon' || null);
// console.log(undefined && false);
// console.log(true || 'watermelon');
// console.log('watermelon' || true);
// console.log(false && 'pineapple');
// console.log('pineapple' && false);
// console.log(NaN || 'kiwi');
// console.log('kiwi' || NaN);
// console.log(NaN && 'mango');
// console.log('mango' && NaN);
// console.log(Infinity || 'apricot');
// console.log('apricot' || Infinity);
// console.log(Infinity && 'blueberry');
// console.log('blueberry' && Infinity);
// console.log(null || undefined);

// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);
// ```

// ---

// ## Task 2

// Використовуючи конструкцію if..else і prompt, напиши код, який запитуватиме:
// `"Яка офіційна назва JavaScript?"`. Якщо користувач вводить `ECMAScript`, то
// показуй alert з рядком `"Вірно!"`, інакше - ` "Не знаєте? ECMAScript!"`

// ---

// ## Task 3

// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
// рядка формату
// `` 14 год. 26 хв.'`. Якщо значення змінної `minutes` дорівнює `0`, то виводь рядок  ``14
// год.'`, без хвилин.

// ```js
// const hours = 14;
// const minutes = 26;
// let timestring;

// console.log(timestring);
// ```

// ---

// ## Task 4

// Напиши скрипт, який виводить в консоль рядок "Це позитивне число", якщо
// користувач prompt ввів число більше нуля. Якщо було введено нуль, виводь в
// консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі повинен бути
// рядок "Це негативне число".

// ```js
// const userInput = prompt('Введите число');
// ```

// ---

// ## Task 4

// Напиши скрипт, який порівнює числа в змінних `a` та `b`. Якщо обидва значення
// більше `100`, то виведи в консоль максимальне з них. Інакше у разі консолі
// повинна бути сума значення `b` і числа 512.

// ```js
// const a = 120;
// const b = 180;
// ```

// ---

// ## Task 5

// Напиши скрипт який перевіряє чи закінчується значення змінної `link` символом
// `/`. Якщо ні, додай до кінця значення `link` цей символ. Використовуй
// конструкцію `if...else`.

// ```js
// let link = 'https://my-site.com/about';

// console.log(link);
// ```

// ---

// ## Task 6

// Напиши скрипт який перевіряє чи закінчується значення змінної `link` символом
// `/`. Якщо ні, додай до кінця значення `link` цей символ, але тільки в тому
// випадку, якщо в `link` є підрядок ``my-site'`. Використовуй конструкцію
// `if...else`.

// ```js
// let link = 'https://somesite.com/about';
// Пиши код нижче за цей рядок

// Пиши код вище за цей рядок
// console.log(link);
// ```

// ---

// ## Task 7

// Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

// ```js
// let link = 'https://somesite.com/about';
// if (link.includes('my-site') && !link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);
// ```

// ---

// ## Task 8

// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення
// змінної `hours`.

// Якщо значення змінної `hours`:

// - менше `17`, виводь рядок ``Pending''
// - більше або одно `17` і менше або дорівнює 24, виводь рядок ``Expires'`
// - більше `24`, виводь рядок ``Overdue''

// ```js
// const hours = 10;
// ```

// ---

// ## Task 9

// Напиши скрипт для відображення часу дедлайн здачі проекту. Використовуй
// конструкцію `if...else`.

// - Якщо до дедлайну 0 днів - виведи рядок ``Сьогодні''
// - Якщо до дедлайну 1 день - виведи рядок "Завтра"
// - Якщо до дедлайну 2 дні - виведи рядок ``Післязавтра'`
// - Якщо до дедлайну 3+ днів - виведи рядок ``Дата в майбутньому''

// ```js
// const daysUntilDeadline = 5;
// Пиши код нижче за цей рядок
// ```

// ---

// ## Task 10

// Виконай рефакторинг коду задачі номер 5, використовуючи `switch`.

// ```js
// const daysUntilDeadline = 5;

// if (daysUntilDeadline === 0) {
//   console.log('Сьогодні');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Післязавтра');
// } else {
//   console.log('Дата в майбутньому');
// }
// ```

// ---

// ## Task 11

// Напиши цикл for який виводить у консоль браузера числа за зростанням від `min`
// до `max`, але тільки якщо число кратне `5`.

// ```js
// const max = 100;
// const min = 20;
// ```

// ---

// ## Task 12

// Напиши скрипт, який питатиме логін за допомогою `prompt` та логуватиме результат
// у консоль браузера.

// - Якщо відвідувач вводить `Адмін`, то `prompt` запитує пароль
// - Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок `Скасовано`
// - В іншому випадку вивести рядок "Я вас не знаю"

// Пароль перевіряти так:

// - Якщо введено пароль "Я адмін", то вивести рядок "Доброго дня!"
// - Інакше виводити рядок "Неправильний пароль"

// ---

// ## Codewars

// 1. [Kata](https://www.codewars.com/kata/5748838ce2fab90b86001b1a)
// 1. [Kata](https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6)
// 1. [Kata](https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript)
// 1. [Kata](https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a)
// 1. [Kata](https://www.codewars.com/kata/55a5befdf16499bffb00007b/train/javascript)
// 1. [Kata](https://www.codewars.com/kata/5708f682c69b48047b000e07)
// 1. [Kata](https://www.codewars.com/kata/5bb0c58f484fcd170700063d)
// 1. [Kata](https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097)

// 1. Напиши цикл, який виведе кожну другу літеру рядочку "Hello world"
// 1. Напиши цикл, який виведе кожну літеру рядочку "Hello world" у зворотньому
//    порядку.
// 1. Напиши цикл, який виведе кожну літеру рядочку "Hello world" поки не зустріне
//    пробіл.
// 1. Напиши функцію, яка приймає рядок та повертає перевернутий рядок
// 1. Напиши функцію, яка приймає рядок та повертає перевернутий рядок де кожен
//    другий символ у верхньому регістрі
// 1. Напиши цикл, який виведе на консоль числа від 1 до 10.
// 1. Напиши цикл, який виведе на консоль парні числа від 1 до 20.
// 1. Напиши цикл, який виведе на консоль кожну другу літеру слова "JavaScript".
// 1. Напиши цикл, який знайде та виведе на консоль суму всіх чисел від 1 до 100.
// 1. Напиши цикл, який перевірить, чи число, яке вводить користувач, є простим.
// 1. Напиши цикл, який виведе на консоль таблицю множення для числа 7 (від 1 до
//    10).
// 1. Напиши цикл, який обчислить факторіал числа, введеного користувачем
//    (наприклад, факторіал 5 = 5 _ 4 _ 3 _ 2 _ 1).
// 1. Напиши цикл, який виведе на консоль всі прості числа від 1 до 50.
// 1. Напиши цикл, який знайде найбільший спільний дільник (НСД) двох чисел,
//    введених користувачем.

// ---

// - [Kata #1](https://www.codewars.com/kata/55908aad6620c066bc00002a)
// - [Kata #2](https://www.codewars.com/kata/5413759479ba273f8100003d)
// - [Kata #3](https://www.codewars.com/kata/57a2013acf1fa5bfc4000921)
// - [Kata #4](https://www.codewars.com/kata/562926c855ca9fdc4800005b)
// - [Kata #5](https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3)
// - [Kata #6](https://www.codewars.com/kata/553e8b195b853c6db4000048)
// - [Kata #7](https://www.codewars.com/kata/55caef80d691f65cb6000040)
// - [Kata #8](https://www.codewars.com/kata/59dd3ccdded72fc78b000b25)
// - [Kata #9](https://www.codewars.com/kata/56d6c333c9ae3fc32800070f)
// - [Kata #10](https://www.codewars.com/kata/5547929140907378f9000039)
// - [Kata #11](https://www.codewars.com/kata/5259b20d6021e9e14c0010d4)
// - [Kata #12](https://www.codewars.com/kata/57eae20f5500ad98e50002c5)
