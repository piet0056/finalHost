/*


TODO

sleep more
form valid
spawning popup
moving user creation to local storage
functioning out the cookie search?

*/
var ID = sessionStorage.getItem("movieID");
var movieTitle;

function createOrder(movieID){
    $.ajax({
        url: 'https://api.themoviedb.org/3/movie/' + movieID + '?api_key=526f0aa4d695ffd0f25bd3d796b51edb&language=en-US',
        dataType: 'json',
        success: function(result)
      {
        $("#orderImage").attr("src", "https://image.tmdb.org/t/p/original" + result.poster_path);
        $("#movieTitle").text(result.title);
      }
    })
    let today = new Date;
    $("#cardText").text(sessionStorage.getItem("showTime") + " | " +  today.toLocaleDateString());
    $("#movieTime").text("@" + sessionStorage.getItem("showTime"));
}

var cleave = new Cleave('.input-credit-card', {
  creditCard: true,
});


var cleave = new Cleave('.input-credit-card-1', {
  creditCard: true,
});


$("#createAccount").submit(function(e){
  var isFormValid = true;
  $(".form1").each(function(){
    if($(this).val() == ""){
      isFormValid = false;
    }
    })
    $("#loginDiv").css("display", "none");
    if(isFormValid == true){
      sessionStorage.setItem("Created User First Name", $("#fnameInput1").val());
      sessionStorage.setItem("Created User Last Name", $("#lnameInput1").val());
      sessionStorage.setItem("Created User Email", $("#emailInput1").val());
      sessionStorage.setItem("Created User CC", $("#creditCard1").val());
    }
    $("#mainCheckoutDiv").css("display", "block")
    return isFormValid;
})

$("#loginForm").submit(function(){

  if($("#emailInput").val() == "")
  {
    console.log("hey");
    return false;
  }
  else if($("#emailInput").val() == sessionStorage.getItem("Created User Email")){
    document.cookie = "loggedIn=true";
    document.cookie = "currentLoggedInUserName=" + sessionStorage.getItem("Created User First Name");
    document.cookie = "currentLoggedInUser=" + $("#emailInput").val();
    return true;
  }
})


$("#ticketQuant").change(function(){
  console.log($("#ticketQuant").val() * 9.99);
  $("#subTotal").text("$" + $("#ticketQuant").val() * 9.99);
})

$(document).ready(function(){
  const usernameCookie = document.cookie
  .split('; ')
  .find((row) => row.startsWith('currentLoggedInUserName='))
  ?.split('=')[1];
  if(usernameCookie){
    $("#userName").text("Welcome,       " + usernameCookie);
    //document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";
  }

  const loginCookieValue = document.cookie
  .split('; ')
  .find((row) => row.startsWith('loggedIn='))
  ?.split('=')[1];
  if(loginCookieValue == "true"){
    $("#loginForm").css("display", "none")
    $("#checkoutForm").css("display", "block")
    //document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";
  }

})

$("#placeOrder").click(function(){
  let subj = 'Your Receipt From ART Cinema Order ID ' + (Math.random() + 1) * 317653;
  const usernameCookie = document.cookie
  .split('; ')
  .find((row) => row.startsWith('currentLoggedInUser='))
  ?.split('=')[1];
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "spietersma@gmail.com",
    Password : "EC1905FFBE80EEA2EC98BF5B955B879458AE",
    To : usernameCookie,
    From : "business.artcinema@gmail.com",
    Subject : subj,
    Body : "<h1> See you  " + $("#movieTime").text() + "to watch " + $("#movieTitle").text() +"! </h1>"
  }).then(
    message => alert("Email Confirmation Has Been Sent")
  );
})


$("#createAccountBtn").click(function(){
  $("#loginDiv").css("display", "block")
  $("#mainCheckoutDiv").css("display", "none")
})

createOrder(ID);