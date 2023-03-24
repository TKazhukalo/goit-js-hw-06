function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const widgetEl = document.querySelector('.widget');
const colorEl = document.querySelector('.color');
const btnChangeEl = document.querySelector('.change-color');
btnChangeEl.addEventListener('click', onClick);
function onClick() {
  widgetEl.style.background = getRandomHexColor();
 // console.log(getRandomHexColor());
 colorEl.textContent = `${getRandomHexColor()}`;
 // console.log(event.currentTarget);
}