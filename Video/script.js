const video = document.querySelector('video');
console.dir(video)
const currentTimeEl = document.querySelector('.current-time');
const durationEl = document.querySelector('.duration');



function correctionDuration(duration) {
  let minutes = Math.floor(duration / 60);
  let seconds = Math.floor(duration % 60);
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return minutes + ':' + seconds;
}

function handleClick() {
  video.paused ? video.play() : video.pause();
}

function getDuration() {
  const duration = video.duration;
  durationEl.textContent = correctionDuration(duration);
}

function updateTime() {
  let currentTime = video.currentTime;
  currentTimeEl.textContent = correctionDuration(currentTime);
  if (video.ended) {
    video.currentTime = 0;
  };
}

video.addEventListener('loadedmetadata', () => {
  getDuration();
});

video.addEventListener('timeupdate', () => {
  updateTime();
});

video.addEventListener('click', () => {
  handleClick();
});