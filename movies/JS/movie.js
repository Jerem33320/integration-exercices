const moviePage = new function(){
  this.movieTitle = document.getElementById('movie-title');
  this.movieDescription = document.getElementById('movie-description');
  this.movieImageDiv = document.getElementById('movie-image');

  this.getMovie = function(){
    const paramTitle = location.search.substring(1).split("?");
    
    const afterRegexTitle = this.escapeRegExp(paramTitle[0]);
    const afterRegexDescription = this.escapeRegExp(paramTitle[1]);
    const afterRegexImage = this.fixedImageWithRegex(paramTitle[2]);

    console.log(afterRegexImage);
    const movieImg = document.createElement('img');
    movieImg.src = afterRegexImage;
    movieImg.style.width = "200px";

    this.movieTitle.append(afterRegexTitle);
    this.movieDescription.append(afterRegexDescription);
    this.movieImageDiv.appendChild(movieImg);
  }

  this.escapeRegExp = function(string) {
    return string.replace(/\W\d*/g).split("undefined").join(' ');
  }

  this.fixedImageWithRegex = function(string){
    return string.replace(/(%27)/g).split("undefined").join('');
  }
}

moviePage.getMovie();