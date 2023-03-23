const counterEl = document.querySelector('#counter');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector('#value');
let counterValue = 0;
decrementBtnEl.addEventListener('click', onMinus);
incrementBtnEl.addEventListener('click', onPlus);
function onMinus() {
    counterValue -= 1;
    spanEl.textContent = `${counterValue}`;
};
function onPlus() {
    counterValue += 1;
    spanEl.textContent = `${counterValue}`;
};