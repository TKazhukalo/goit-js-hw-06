const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
textInput.addEventListener('input', onInputText);
    
function onInputText() {
   output.textContent = textInput.value;
};
