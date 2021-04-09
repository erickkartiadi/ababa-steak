//* Slideshow
$(document).ready(function() {
  $(window).click(function() {
    $(".dropdown").removeClass("dropdown__show");
  })

  $("#dropdown__button").click(function(event) {
    event.stopPropagation();
    $(".dropdown").toggleClass("dropdown__show");
  })
})

