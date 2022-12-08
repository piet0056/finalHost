var movieIdOz = "630"

var movieIdList = ["653", "630", "770", "289", "389", "429"];
var image = document.createElement("img");
var mainTitle = document.querySelector("#titleImage");
var main = document.querySelector("#main")


class moviePoster{
    constructor(movieID,
                moviePosterSource,
                showTimes,
                movieTitle
                )
                {
                    this.movieTitle = movieTitle;
                    this.movieID = movieID;
                    this.moviePosterSource = moviePosterSource;
                    this.showTimes = showTimes;
                }

    getMovieId(){
        return this.movieID;
    }
    getMoviePosterSource(){
        return "https://image.tmdb.org/t/p/original" + this.moviePosterSource;
    }
}

function getFromAPI(index){
    $.ajax({
        url: 'https://api.themoviedb.org/3/movie/' + movieIdList[index] + '?api_key=526f0aa4d695ffd0f25bd3d796b51edb&language=en-US',
        dataType: 'json',
        success: function(result)
      {
        var movieTitle        = result.movie_title;
        var moviePosterPath   = result.poster_path;
        var movieID           = result.id;

        createMoviePosters(movieID, moviePosterPath, movieTitle, index);
 
      }})

}


function createMoviePosters(id, path, title, index){
    console.log("done" + id + path + title);
    var showTimes = ["9:00PM", "11:45PM"]
    let moviePosterNosferatu = new moviePoster(id, path, showTimes, title);
    $("#movie" + index).attr("src", moviePosterNosferatu.getMoviePosterSource());
    $("#movie" + index).css("width", "100%")

}






//OLD METHODS
async function getMovieInfo(movieId){
    return fetch('https://api.themoviedb.org/3/movie/' +
    movieIdList[movieId] + '?api_key=526f0aa4d695ffd0f25bd3d796b51edb&language=en-US')
    .then((response) => response.json())
    .then((data) => {return data});
}

async function getMovieImage(movieId){
    return fetch('https://api.themoviedb.org/3/movie/' + movieIdList[movieId] + '?api_key=526f0aa4d695ffd0f25bd3d796b51edb&language=en-US')
    .then((response) => response.json())
    .then((data) => {return data});
}

async function buildMovieInfoDiv(movieId){
    const json = await getMovieInfo(movieId);
    $("#movieTitleHolder" + movieId).attr("value", json.title)
    $("#movieTitleHolder" + movieId).addClass("h1");
    $("#movieIDHolder" + movieId).attr("value", json.id)

}

async function buildMovieImageDiv(movieId){
    const json = await getMovieImage(movieId);
    x = document.createElement("img");
    x.setAttribute("id", "image" + movieId);
    x.setAttribute("style", "width:100%");
    x.setAttribute("margin", "auto");
    document.querySelector('#main' + movieId).appendChild(x)
    document.getElementById("image" + movieId).src="https://image.tmdb.org/t/p/original" + json.poster_path
}
for(var i = 0; i < movieIdList.length; i++){
    buildMovieInfoDiv(i);
}

for(var i = 0; i < 6; i++){
    getFromAPI(i);
}


