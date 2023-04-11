const block = document.querySelector('.js-block');
const color = document.querySelector('.js-color');
const btn = document.querySelector('.js-btn');
const hex = '0123456789ABCDEF';

let randomColor = '#'; // объявляем глобальную переменную

const getRandomColor = () => {
  randomColor = '#'; // используем глобальную переменную
  for (let index = 0; index < 6; index++) {
    randomColor += hex[Math.floor(Math.random()*hex.length)];
  }
  console.log(randomColor);
}

btn.addEventListener('click', () => {
  getRandomColor();
  block.style.backgroundColor = randomColor;
  block.style.boxShadow = `0px  5px 10px 2px ${randomColor}`;
  color.innerHTML = randomColor;
});
