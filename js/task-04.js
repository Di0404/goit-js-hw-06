// Создай переменную counterValue в которой будет 
// храниться текущее значение счетчика
//  и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки,
//  внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const span =  document.querySelector('#value')


let counterValue = 0

decBtn.addEventListener('click', onDecBtnDecrement )
incBtn.addEventListener('click', onDecBtnIncrement )
function onDecBtnDecrement (){
// console.log('klil')
counterValue -= 1;
span.textContent = counterValue
}

function onDecBtnIncrement (){
    console.log('klil')
    counterValue += 1;
    span.textContent = counterValue
    }
    


































// const decBtn = document.querySelector('[data-action="decrement"]');
// const incBtn = document.querySelector('[data-action="increment"]');
// const span =  document.querySelector('#value')

// let counterValue = 0

// // console.log(counterValue)
// decBtn.addEventListener('click', onBtnDecrementClick)
// function onBtnDecrementClick(event) {
//     // counterValue = span.event.currentTarget.value
//     counterValue-=1;
//     span.textContent = counterValue;
// }

// incBtn.addEventListener('click', onBtnIncrementClick)
// function onBtnIncrementClick(event) {
//     counterValue+=1;
//     span.textContent = counterValue;

// }