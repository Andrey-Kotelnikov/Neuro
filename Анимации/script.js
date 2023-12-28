function toggleActiveAnimation(element) {
  //console.log(element.children)
  if (element.children[0].style['animation-play-state'] === 'running') {
    element.children[0].style['animation-play-state'] = 'paused';
  } else {
    element.children[0].style['animation-play-state'] = 'running';
  }
  
}

const animationElements = document.querySelectorAll('.item');
animationElements.forEach(element => {
  element.addEventListener('click', () => {
    toggleActiveAnimation(element);
  });
})

