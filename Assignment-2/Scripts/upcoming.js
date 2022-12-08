
$(document).ready(function(){
    for(var i = 1; i < 4; i++){
        createUpcoming(i);
    }
})       


function createUpcoming(index){

    console.log(i);
    $.ajax({
        url: 'https://api.themoviedb.org/3/movie/' + movieIdList[index] + '?api_key=526f0aa4d695ffd0f25bd3d796b51edb&language=en-US',
        dataType: 'json',
        success: function(result)
      {
        x = document.createElement("img");
        x.setAttribute("id", "upcomingIMG" + index);
        document.querySelector(('#upcoming' + index)).appendChild(x)
        document.getElementById("upcomingIMG" + index).src="https://image.tmdb.org/t/p/original" + result.poster_path
      }
    })


}


$("#nosferatuTicket").click(function(){
    x = $("#currentMovieID").text();
    console.log(x);
    $.ajax({
        url: 'https://api.themoviedb.org/3/movie/' + x + '?api_key=526f0aa4d695ffd0f25bd3d796b51edb&language=en-US',
        dataType: 'json',
        success: function(result)
      {
        sessionStorage.setItem("movieID", result.id)
        sessionStorage.setItem("showTime", "10:00 PM");
        
      }
    })
})