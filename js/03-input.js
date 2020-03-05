/*
 * События input и change
 * Чекбоксы и свойство checked
 */

const btnRef = document.querySelector('.js-button');
const inputRef = document.querySelector('.js-input');
const nameLabelRef = document.querySelector('.js-button > span');
const licenseRef = document.querySelector('.js-license');

inputRef.addEventListener('focus', handleInputFocus);
inputRef.addEventListener('blur', handleInputBlur);
inputRef.addEventListener('input', handleInputChange);
licenseRef.addEventListener('change', handleLicenseChange);

function handleInputFocus(event) {
  console.log('Получил фокус!');
}

function handleInputBlur(event) {
  console.log('Потерял фокус!');
}

function handleInputChange(event) {
  nameLabelRef.textContent = event.target.value;
}

function handleLicenseChange(event) {
  btnRef.disabled = !event.target.checked;
}
