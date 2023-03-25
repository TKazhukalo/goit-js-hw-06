function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.body;
const widgetEl = document.querySelector('.widget');
const colorEl = document.querySelector('.color');
const btnChangeEl = document.querySelector('.change-color');
btnChangeEl.addEventListener('click', onClick);
function onClick() {
  bodyEl.style.background = getRandomHexColor();
 // console.log(getRandomHexColor());
 colorEl.textContent = `${bodyEl.style.background}`;
 // console.log(event.currentTarget);
}