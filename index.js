/*1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.*/

const idSuper = document.getElementById("super_link");
console.log(idSuper);



/*2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".*/

const cardLinks = document.querySelectorAll(".card-link");
cardLinks.forEach((link) => (link.textContent = "ссылка"));



/*3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.*/

const cardLink = document.querySelectorAll('.card-body .card-link');
console.log(cardLink);



/*4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.*/

const data = document.querySelector("[data-number='50']");
console.log(data);



// 5. Выведите содержимое тега title в консоль.

const title = document.title;
console.log(title);



/*6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.*/

const cardTitle = document.querySelector(".card-title");
console.log(cardTitle.parentNode);


/*7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".*/

const paragrof = document.createElement("p");
paragrof.textContent = "Привет";
const card = document.querySelector(".card");
card.insertBefore(paragrof, card.firstChild);



// 8. Удалите тег h6 на странице.

const tegH6 = document.querySelector('h6')
tegH6.remove('h6');
