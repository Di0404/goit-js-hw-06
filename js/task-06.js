// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его
// атрибуте data-length.
// Если введено подходящее количество символов,
// то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid,
//  которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }


const textInput = document.querySelector("#validation-input");
const inputData = Number(textInput.dataset.length); // ПРИВОДИМ К ЧИСЛУ
const inputDataA = textInput.dataset.length; // ПОЛУЧАЕТЬСЯ СТРОКА 

// console.log(`inputData`, inputData)
// console.log(`inputDataA`, inputDataA)
// console.log(`textInput.dataset`,textInput.dataset)


textInput.addEventListener("blur", onInputBlur)


function onInputBlur (event) {
// в переменной textInputContentLength длина вписанных букв
  const textInputContentLength = textInput.value.length;
  console.log(textInputContentLength)
  if (textInputContentLength !== inputData) {
    // replaceClasses("invalid");
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
    // return;
  } else {
// //   replaceClasses("valid", "invalid");
textInput.classList.remove('invalid');
textInput.classList.add('valid');}
};


///////////////////////////////////////////////////////////////////
// ВТОРОЙ ВАРИАНТ

// textInput.addEventListener("blur", onInputBlur)
// function onInputBlur (event) {
//   // в переменной textInputContentLength длина вписанных букв
//     const textInputContentLength = textInput.value.length;
//     console.log(textInputContentLength)
//     if (textInputContentLength !== inputData) {
//       replaceClasses("invalid", "valid");
//       // textInput.classList.add('invalid');
//       // textInput.classList.remove('valid');
//       // return;
//     } else {
//     replaceClasses("valid", "invalid");
//   // textInput.classList.remove('invalid');
//   // textInput.classList.add('valid');}
//   }; 
// }
// // МОЖНО ВЫНЕСТИ КЛАССЫ В ФУНКЦИЮ , И ВЫЗВАТЬ ЕЕ
// const replaceClasses = (classToAdd, classToRemove) => {
//   textInput.classList.remove(classToRemove);
//   textInput.classList.add(classToAdd);
// };