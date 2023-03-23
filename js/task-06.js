const inputBlurEl = document.querySelector('#validation-input');
inputBlurEl.addEventListener('blur', onInputBlur);


function onInputBlur() {
    
    if (inputBlurEl.getAttribute('data-length') <= inputBlurEl.value.length) {
     //console.log(inputBlurEl.value.length);
        inputBlurEl.classList.add('valid');
    }
    inputBlurEl.classList.add('invalid');
 console.log(`Input потерял фокус -событие блюр`);
}