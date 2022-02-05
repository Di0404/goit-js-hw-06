// Напиши скрипт который:
// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и
//  выведет в консоль текст заголовка элемента (тега <h2>)
// и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5




const ulItemEl = document.querySelector('#categories')
// console.log(ulItemEl)

const liItemEl = document.querySelectorAll(".item")
// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.  ---OK
console.log(`Number of categories:`, liItemEl.length) 

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
liItemEl.forEach(elem => {
    const text = elem.firstElementChild.textContent;
    console.log(`Category:`, text)
    const allLI = elem.querySelectorAll('li')
    console.log(`Elements:`,allLI.length)
});


