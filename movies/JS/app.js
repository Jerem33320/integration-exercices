const app = new function(){
  const CONFIG_URL = `https://api.themoviedb.org/3/configuration?api_key=87dfa1c669eea853da609d4968d294be&language=en-US`;
  const MOVIES_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=87dfa1c669eea853da609d4968d294be&language=en-US&page=1`;

  this.scrollMovies = document.querySelector('.scroll-movies');
  this.selectors = document.querySelectorAll('.selector');
  this.inputSearch = document.getElementById('search-input');

  this.config = function(){
    fetch(CONFIG_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(function(err){
      console.log(err);
    })
  }

  this.fetchAll = function(){
    fetch(MOVIES_URL)
    .then(res => res.json())
    .then(data => {
      // this.config();
      console.log(data);

      this.getImages(data);
      this.selectCategorie();

      this.inputSearch.addEventListener('change', function(e){
        this.btnSearch = document.getElementById('search-btn');
        for(let i = 0; i < data.results.length; i++){
          if(e.target.value === data.results[i].title){
            this.btnSearch.onclick = function(e) {
              e.preventDefault();
              location.href = `./movieID.html?${data.results[i].title}`;
              // location.href = `https://api.themoviedb.org/3/movie/${data.results[i].id}?api_key=87dfa1c669eea853da609d4968d294be&language=en-US`;
            }
          } else {
            console.log('ERROR: input not selected or wrong name movie')
          }
        }
      })
    })
    .catch(function(err){
      console.log(err);
    })
  }

  this.getImages = function(data){
    for(let i = 0; i < data.results.length; i++){
      const movieImg = document.createElement('img');
      const movieDiv = document.createElement('div');

      movieImg.src = 'https://image.tmdb.org/t/p/w154' + data.results[i].poster_path;
      movieDiv.classList.add('movie-div');

      movieDiv.appendChild(movieImg);
      this.scrollMovies.appendChild(movieDiv);

      movieDiv.onclick = function(e) {
        e.preventDefault();
        location.href = `https://api.themoviedb.org/3/movie/${data.results[i].id}?api_key=87dfa1c669eea853da609d4968d294be&language=en-US`;
      }
    }
  }

  this.selectCategorie = function(){
    for(const selector of this.selectors){
      selector.addEventListener('click', () => {
        selector.classList.add('selected');
      })
      selector.addEventListener('mouseout', () => {
        selector.classList.remove('selected');
      })
    }
  }
}

document.addEventListener('DOMContentLoaded', app.fetchAll());