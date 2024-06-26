// **Завдання Банківський рахунок**

// Ви розробляєте систему управління банківськими рахунками. Вам потрібно створити
// клас `BankAccount` для подання банківського рахунку з різними властивостями та
// функціональністю.

class BankAccount {
  static #bankName = 'Monobank';
  #accountNumber;
  #balance;
  #ownerName;

  constructor(params) {
    this.#accountNumber = params.accountNumber;
    this.#balance = params.balance;
    this.#ownerName = params.ownerName;
  }

  getAccountInfo() {
    return `Bank name: ${BankAccount.#bankName} \n
                Account number: ${this.#accountNumber} \n
                Balance: ${this.#balance} \n
                Account owner: ${this.#ownerName}`;
  }

  // get balance() {
  //     return `Your balance is ${this.#balance} UAH`;
  // }

  // set balance() {

  // }

  // get ownerName() {

  // }

  // set ownerName() {

  // }

  static setBankName(bankName) {
    this.#bankName = bankName;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }
}

// 1. Створіть клас `BankAccount` з приватною статичною властивістю `bankName`, яке
//    зберігатиме ім'я банку за умовчанням.

// 2. Додайте приватні властивості `accountNumber`, `balance` та `ownerName`, які
//    зберігатимуть номер рахунку, баланс та ім'я власника.

// 3. Створіть геттери та сеттери для властивостей `balance` та `ownerName`. Геттер для балансу має форматувати його як грошову суму.

// 4. Додайте статичний метод `setBankName(bankName)`, який дозволить змінити ім'я
//    банку за промовчанням всім рахунків.

// 5. Реалізуйте метод `deposit(amount)`, який збільшуватиме баланс рахунку на
//    зазначену суму.

// 6. Реалізуйте метод `withdraw(amount)`, який зменшуватиме баланс рахунку на
//    зазначену суму, але якщо на рахунку достатньо коштів.

// Приклад:

// ```javascript
// Створюємо банківський рахунок

// const account = new BankAccount({ accountNumber: '12345', balance: 1000, ownerName: 'John Doe' });

// console.log(account.getAccountInfo());

// account.deposit(500);
// console.log(account.getAccountInfo());

// account.withdraw(200);
// console.log(account.getAccountInfo());

// account.balance = 1500;
// console.log(account.getAccountInfo());

// account.ownerName = 'Jane Smith';
// console.log(account.getAccountInfo());

// BankAccount.setBankName('NewBank');
// console.log(account.getAccountInfo());

// У цій задачі використовуються статичні властивості, приватні властивості, гетери
// та сеттери, щоб створити клас `BankAccount`, який представляє банківський
// рахунок з функціональністю для внесення депозитів, зняття коштів, зміни імені
// власника та виведення інформації про рахунок.

// **Завдання для класу ToDoList: Управління завданнями**

// Реалізуйте клас `Task` для подання завдання з полями:

// - `title` (заголовок задачі)
// - `description` (опис завдання)
// - `due_date` (термін виконання завдання)
// - `priority` (пріоритет завдання, наприклад, від 1 до 5)

// Потім створіть клас `ToDoList`, який представлятиме список завдань і буде мати
// такі методи:

// 1. `add_task(task: Task)`: Додає передане завдання до списку завдань.
// 2. `remove_task(task_title: str)`: Видаляє завдання за її заголовком.
// 3. `get_task(task_title: str) -> Task`: Повертає завдання з її заголовку.
// 4. `get_all_tasks() -> List[Task]`: Повертає перелік всіх завдань.
// 5. `get_tasks_by_priority(priority: int) -> List[Task]`: Повертає перелік
//    завдань певного пріоритету.
// 6. `get_tasks_by_due_date(date: datetime) -> List[Task]`: Повертає список
//    завдань, у яких термін виконання не пізніше вказаної дати.

// Приклад використання:

// ```js
// const task1 = Task(
//   'Підготувати презентацію',
//   'Підготувати матеріали та слайди для презентації',
//   '2023-09-01',
//   3,
// );
// const task2 = Task(
//   'Зробити покупки',
//   'Купити продукти для приготування обіду',
//   '2023-08-25',
//   2,
// );
// const task3 = Task(
//   'Записати відеоурок',
//   'Записати урок з програмування',
//   '2023-08-28',
//   4,
// );
// ```

// Завдання полягає в тому, щоб реалізувати клас `ToDoList` з методами, які
// дозволяють керувати списком завдань: додавати, видаляти, отримувати інформацію
// про задачах та фільтрувати задачі за різними критеріями.

// ---

// **Завдання для класу FriendList: Управління списком друзів**

// Ви розробляєте програму для керування списком друзів користувачів. Вам потрібно
// створити клас `Friend` для подання інформації про друга з полями:

// - `name` (ім'я друга)
// - `age` (вік друга)
// - `email` (електронна пошта друга)
// - `isBestFriend` (прапор, що вказує, чи є один найкращим другом)

// Потім створіть клас `FriendList`, який представлятиме список друзів користувача.
// Клас повинен мати такі методи:

// 1. `addFriend(friend: Friend)`: Додає переданого друга до списку друзів.
// 2. `removeFriend(email: string)`: Видаляє друга електронною поштою.
// 3. `getFriendByEmail(email: string)`: Повертає інформацію про друга щодо нього
//    електронній пошті.
// 4. `getBestFriends()`: Повертає список усіх найкращих друзів.
// 5. `getFriendsByAge(age: number)`: Повертає список друзів певного віку.

// Приклад використання:

// ```js
// // Створюємо об'єкти Friend
// const friend1 = new Friend("John", 25, "john@example.com", true);
// const friend2 = new Friend("Jane", 30, "jane@example.com", false);
// const friend3 = new Friend("Michael", 28, "michael@example.com", true);

// // Створюємо об'єкт FriendList
// const myFriendList = новий FriendList();

// // Додаємо друзів до списку
// myFriendList.addFriend(friend1);
// myFriendList.addFriend(friend2);
// myFriendList.addFriend(friend3);

// // Видаляємо друга електронною поштою
// myFriendList.removeFriend("jane@example.com");

// // Отримуємо інформацію про друга електронною поштою
// const foundFriend = myFriendList.getFriendByEmail("john@example.com");

// // Отримуємо список найкращих друзів
// const bestFriends = myFriendList.getBestFriends();

// // Отримуємо список друзів певного віку
// const friendsWithAge28 = myFriendList.getFriendsByAge(28);
// ```

// Завдання полягає в реалізації класу `FriendList` з методами, які дозволяють
// керувати списком друзів, додавати та видаляти друзів, а також виконувати пошук
// та фільтрацію друзів за різними критеріями.

// ---

// **Завдання Створення ієрархії фігур**

// Ви розробляєте програму для роботи з геометричними фігурами. Вам потрібно
// створити ієрархію класів для представлення різних фігур: кола, прямокутника та
// трикутника. Усі фігури повинні мати спільний метод `calculateArea()`, який
// обчислюватиме і повертатиме площу фігури.

// 1. Створіть базовий клас `Shape`, який міститиме конструктор з координатами
//    центру фігури та метод `calculateArea()`. Метод `calculateArea()` у базовому
//    класі має повертати 0.

// 2. Створіть підкласи для кожної геометричної фігури: `Circle`, `Rectangle` та
//    `Triangle`. Кожен підклас повинен успадковувати від Shape.

// 3. Реалізуйте метод calculateArea() для кожного підкласу, щоб він коректно
//    обчислював площу відповідної фігури.

// 4. Створіть кілька об'єктів кожного типу фігур та виведіть їх площі.

// Приклад:

// ```js
// const circle = new Circle(0, 0, 5);
// const rectangle = new Rectangle(0, 0, 4, 6);
// const triangle = new Triangle(0, 0, 8, 5);

// console.log('Circle area:', circle.calculateArea()); // Output: Circle area: 78.53981633974483
// console.log('Rectangle area:', rectangle.calculateArea()); // Output: Rectangle area: 24
// console.log('Triangle area:', triangle.calculateArea()); // Output: Triangle area: 20
// ```

// Завдання полягає у створенні ієрархії класів з використанням успадкування,
// реалізації методу `calculateArea()` для кожного підкласу та демонстрації
// розрахунків площ різних постатей.

// ---

// **Завдання Онлайн магазин електроніки**

// Ви розробляєте веб-додаток для онлайн-магазину електроніки. Вам потрібно
// створити ієрархію класів для різних типів продуктів: смартфонів, ноутбуків та
// навушників. Кожен продукт має свої характеристики, такі як бренд, модель, ціна
// та характеристики (наприклад, роздільна здатність екрану для смартфона, тип
// процесора для ноутбука та тип підключення для навушників).

// 1. Створіть базовий клас `Product`, який міститиме конструктор з основними
//    характеристиками продукту, такими як бренд, модель та ціна.

// 2. Створіть підкласи для кожного типу продуктів: Smartphone, Laptop і
//    `Headphones`. Кожен підклас повинен успадковувати від `Product`.

// 3. Додайте додаткові характеристики для кожного типу продуктів, наприклад, для
//    смартфонів - роздільна здатність екрана, для ноутбуків - тип процесора, для
//    навушників – тип підключення.

// 4. Реалізуйте метод `productDescription()`, який повертатиме рядок з опис
//    продукту, включаючи всі його характеристики.

// 5. Створіть декілька об'єктів кожного типу продуктів та виведіть їх описи.

// Приклад:

// ```javascript
// const smartphone = new Smartphone('Apple', 'iPhone 13', 999, '1920x1080');
// const laptop = new Laptop('Dell', 'XPS 15', 1499, 'Intel Core i7');
// const headphones = new Headphones('Sony', 'WH-1000XM4', 349, 'Bluetooth');

// console.log(smartphone.productDescription());
// console.log(laptop.productDescription());
// console.log(headphones.productDescription());
// ```

// Завдання полягає у створенні ієрархії класів з використанням успадкування,
// додаванні характеристик для кожного підкласу, реалізації методу
// `productDescription()` та демонстрації описів різних типів продуктів.

// ---
