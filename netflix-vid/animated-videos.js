const allVideos = document.querySelectorAll('.video-netflix');

for(let vid of allVideos) {
  vid.addEventListener('mouseover', (e) => {
    e.target.play()
  }, false);

  vid.addEventListener('mouseout', (e) => {
    e.target.currentTime = 0;
    e.target.pause()
  }, false);
}