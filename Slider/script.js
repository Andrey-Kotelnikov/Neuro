

const images = document.querySelectorAll('.slider__img');
const buttonNext = document.querySelector('.button_next');
const buttonPrev = document.querySelector('.button_prev');

let imageIndex = 0;

function show(index) {
  images[imageIndex].classList.remove('active');
  images[index].classList.add('active');
  imageIndex = index;
}

buttonNext.addEventListener('click', () => {
  let index = imageIndex + 1;
  if (index >= images.length) {
    index = 0;
  }
  show(index);
});

buttonPrev.addEventListener('click', () => {
  let index = imageIndex - 1;
  if (index < 0) {
    index = images.length - 1;
  }
  show(index);
});

show(imageIndex)

class Slider {
  constructor(images) {
    this.images = images
    this.buttonNext = document.querySelector('.button_next');
    this.buttonPrev = document.querySelector('.button_prev');

    
  }

  show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
  }

  

}

const slider = new Slider(images);