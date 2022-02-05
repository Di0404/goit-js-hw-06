// Напиши скрипт который, при наборе текста в инпуте
//  input#name - input(событие input), подставляет его текущее
//  значение в span#name - output.Если инпут пустой,
//  в спане должна отображаться строка "Anonymous".



const input = document.querySelector('#name-input');
const span =  document.querySelector('#name-output')
// // console.log(input)
// // console.log(span)

input.addEventListener('input',OnInputChange )
function OnInputChange(){
    if (input.value === ''){
        span.textContent = 'Anonymous'
    } else {
        const newText =  input.value
        // console.log(newText)
        span.textContent = newText
    }

}





// const input = document.querySelector('#name-input')
// const span = document.querySelector('#name-output')

// input.addEventListener('input', OnInputChange)

// function OnInputChange(event) {
//     if (event.currentTarget.value === "") {
//         span.textContent = 'Anonymous'
//     } else {
//         span.textContent = event.currentTarget.value;
//     }
// }

