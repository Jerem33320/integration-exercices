const moviePage = new function(){
  this.movieTitle = document.getElementById('movie-title');

  this.getTitle = function(){
    const param = location.search.substring(1);
    const afterRegexTitle = this.escapeRegExp(param);
    this.movieTitle.append(afterRegexTitle);
  }

  this.escapeRegExp = function(string) {
    return string.replace(/\W\d*/g).split("undefined").join(' ');
  }
}

moviePage.getTitle()