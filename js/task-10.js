function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsEl = document.querySelector('#controls');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDesployEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');
const inputNumbEl = document.querySelector('[type="number"]');
boxesEl.style.width = '30px';
boxesEl.style.background = getRandomHexColor();
boxesEl.style.display = 'flex';
//console.log(boxesEl);
btnCreateEl.addEventListener('click', onCreate);
function onCreate() {

}
btnDesployEl.addEventListener('click', destroyBoxes);
function destroyBoxes() {
         boxesEl.innerHTML = "";

}