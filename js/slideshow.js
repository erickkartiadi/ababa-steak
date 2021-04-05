//* Slideshow
$(document).ready(function() {
  slideImg = $("div#slideshow > div")
  imgWidth = slideImg.width();

  let totalWidth = slideImg.length * imgWidth;
  $("#slideshow").css({
    width: function() {
      return totalWidth;
    }
  })

  let interval = window.setInterval(function() {
    console.log("tes");
    let active = $(".active");
    active.removeClass("active");
    
    if(active.hasClass("last")) {
      active.parent("div").animate({
        "margin-left": (0),
      }, 1000);
      active.siblings(":first").addClass("active");
    }
    else {
      active.parent('div').animate({
        "margin-left": (-(active.index() + 1) * imgWidth)
      }, 1000);
      active.next().addClass('active');
    }
  }, 3000)
})

