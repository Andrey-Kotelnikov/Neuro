const title = document.querySelector('.title');
const elements = document.querySelector('.elements');

const toggleVisible = () => {
  elements.classList.toggle('novisible');
  console.log('toggle');
}

function timeOut(func, time) {
  let timer;
  return function() {
    if (timer) {clearTimeout(timer)};
    timer = setTimeout(func, time)
  }
}



title.addEventListener('click', timeOut(toggleVisible, 1000));