$("#messager1").fadeIn(2000, function(){

});

$("#messager2").fadeIn(5000, function(){

});


var header = document.getElementById('loadingImage');

function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }
  
  var distanceToTop = window.pageYOffset + header.getBoundingClientRect().top;
  var elementHeight = header.offsetHeight;
  var scrollTop = document.documentElement.scrollTop;
  
  var opacity = 1;
  

  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight * 1.1;
  }
  
  if (opacity >= 0) {
    header.style.opacity = opacity;
  }
}

function scrollHandler() {
fadeOutOnScroll($(header))
}

window.addEventListener('scroll', scrollHandler);


function scrollToLogo(element){
    toScroll = document.getElementById(element);
    toScroll.scrollIntoView();
}
