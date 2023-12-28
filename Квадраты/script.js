const container = document.querySelector('.container');
const maxTop = 790;
const maxLeft = 1190;

const colors =['red', 'blue', 'yellow', 'green', 'orange', 'brown', 'grey', 'purple']

function getRandom(min, max) {
  return Math.random() * (max - min) + min
}

function generateSquare(sum) {
  for (let i = 0; i <= sum; i++) {
    const square = document.createElement('div');
    let randomColor = Math.floor(getRandom(0, colors.length))
    square.style.top = getRandom(0, maxTop) + 'px';
    square.style.left = getRandom(0, maxLeft) + 'px';
    square.style.backgroundColor = colors[randomColor]
    square.style.width = square.style.height = '10px';
    square.style.position = 'absolute';
    container.insertAdjacentElement("afterbegin", square);
  }
}

function generateSum() {
  let sum = getRandom(10, 100);
  generateSquare(sum);
}

generateSum();

container.addEventListener('click', () => {
  container.innerHTML = '';
  generateSum();
})