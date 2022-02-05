// Напиши скрипт, который реагирует на изменение 
// значения input#font-size-control (событие input) и 
// изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
const inputRef = document.querySelector('#font-size-control')
const spanRef = document.querySelector('#text')
console.log(inputRef)
console.log(spanRef)

inputRef.addEventListener('input',onInputeSizeChange)
// console.log(spanRef.textContent)
function onInputeSizeChange (){
    const fontSizeControlValue = inputRef.value;
    spanRef.style.fontSize = `${fontSizeControlValue}px`;
    console.log(fontSizeControlValue)
}