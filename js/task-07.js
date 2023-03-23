const inputSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputSizeEl.addEventListener("input", onSizeControl);
function onSizeControl() {
    textEl.style.fontSize =`${inputSizeEl.value}px`;
};
