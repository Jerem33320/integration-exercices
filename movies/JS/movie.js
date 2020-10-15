const moviePage = new function(){
  this.movieTitle = document.getElementById('movie-title');
  this.movieDescription = document.getElementById('movie-description');

  this.getMovie = function(){
    const paramTitle = location.search.substring(1).split("?");
    const afterRegexTitle = this.escapeRegExp(paramTitle[0]);
    const afterRegexDescription = this.escapeRegExp(paramTitle[1])
    this.movieTitle.append(afterRegexTitle);
    this.movieDescription.append(afterRegexDescription);
  }

  this.escapeRegExp = function(string) {
    return string.replace(/\W\d*/g).split("undefined").join(' ');
  }
}

moviePage.getMovie();