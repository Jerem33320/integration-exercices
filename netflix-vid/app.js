const movieData = [
  "./videos/abstract.mp4",
  "./videos/bike.mp4",
  "./videos/film.mp4",
  "./videos/game.mp4",
  "./videos/neon.mp4",
  "./videos/river.mp4",
  "./videos/xmas.mp4"
];

const videosList = document.querySelector(".videos-list");

for(let i = 0; i < movieData.length; i++){
  const vid = document.createElement("video");
  vid.src = movieData[i];
  vid.classList.add("video-netflix");
  vid.style.height = '150px';
  vid.style.width = '270px';
  videosList.appendChild(vid);
}

