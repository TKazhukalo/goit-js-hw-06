const inputBlurEl = document.querySelector('#validation-input');

inputBlurEl.addEventListener('blur', onInputBlur);


function onInputBlur() {
  const inputLengthEl = inputBlurEl.getAttribute('data-length');
    if (Number(inputLengthEl) <= inputBlurEl.value.length) {
    
      inputBlurEl.classList.add('valid');
      inputBlurEl.classList.remove('invalid');
      
    } else {
        inputBlurEl.classList.add('invalid');
     
    };
};
