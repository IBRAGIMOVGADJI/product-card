const productCard = document.querySelector('.card');
const productCards = document.querySelectorAll('.card');
const changeFirstColorButton = document.querySelector('#change-first-color-button');
const changeColorAllButton = document.querySelector('#change-color-all-button');
const greenColorHash = '#00ff00';
const blueColorHash = '#0000ff';

changeFirstColorButton.addEventListener('click', () => {
  productCard.style.backgroundColor = greenColorHash;
})

changeColorAllButton.addEventListener('click', () =>{
  productCards.forEach((card) => card.style.backgroundColor = blueColorHash);
})

const openGoogleButton = document.querySelector('#open-google');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const question = confirm('Вы дейстительно хотите открыть Google?');
  if (question === true) {
    window.open('https://www.google.com')
  } else {
    return;
  }
}

const outputLogButton = document.querySelector('#output-console-log');
outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ N6'));
function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}
const heading = document.querySelector('.title');
heading.addEventListener('mouseover', () => {
  console.log(heading.textContent);
})

const chBackgroundButton = document.getElementById('change-and-return-color');
chBackgroundButton.addEventListener('click', () => {
  chBackgroundButton.classList.toggle('active');
});