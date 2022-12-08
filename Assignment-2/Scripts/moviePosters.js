function fadeOtherMovies(id){
    $("#currentMoviesGrid").children().each(function(){
        if(this.id != id){
            $(this).css("opacity", "0.5");
            console.log(this.id)
        }
        else{
            console.log(this.id)
        }
    }
    )
    }
    
function resetOpacity(){
    $("#currentMoviesGrid").children().each(function(){
       $(this).css("opacity", "1");
    }
    )
    }
        
function hideMoviePopup(){
    $("#overlay0").css("opacity", "0%")
    $("#overlay0").css("z-index", "-1");
}

/* Deprecated
$(".currentMovie").mouseenter(function(){
    var position = $(this).position()
    var topPos = position.top;
    $("#overlayMovieTitle").text($(this).find(".movieTitleHolder").val());
    $("#currentMovieID").text($(this).find(".movieIDHolder").val());
    $("#overlay0").css("opacity", "100%");
    $("#overlay0").css("top", topPos);
    $("#overlay0").css("left", position.left);
    $("#overlay0").css("z-index", "3");
    console.log("triggered");
})

$("#overlay0").mouseleave(function(){
    $("#overlay0").css("opacity", "0%")
    $("#overlay0").css("z-index", "-1");
})
*/
$(".timeOfMovie").click(function(){
    console.log("clickery-doo-da");
    sessionStorage.setItem("movieID", $(this).parent().parent().parent().find(".movieIDHolder").val())
    window.sessionStorage.setItem("showTime", $(this).text())
    window.location.href = "ticketPurchase.html";
})