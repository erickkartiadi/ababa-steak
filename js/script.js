$(document).ready(function() {


  //* Slider Function
  let sliderWrapper = $("#slider-wrapper");
  let card = $("#slider-wrapper .menu").first();

  // find scroll value
  let cardWidth = card.innerWidth();
  let margin = parseInt(card.css("margin").replace('px', ''));
  let scrollValue = (cardWidth + (margin * 2)) * 2;
  
  

  $("#slider-right").click(function () {
    sliderWrapper.animate({"scrollLeft": `+=${scrollValue}px`}, 400);
  })

  $("#slider-left").click(function () {
    sliderWrapper.animate({"scrollLeft": `-=${scrollValue}px`}, 400);  
  })

  //* change navbar color onscroll
  $(window).scroll(function() {
    if($(window).scrollTop() > $(".header").height()) {
      $(".navigation").css({"background-color":"white"});
      $(".navigation").css({"box-shadow":"0 4px 10px -4px rgba(0, 0, 0, 0.2)"});
      $(".navigation__menu > li > a").css({"color":"black"});
      $("#logo_img").attr("src","./assets/images/logo-black.png");
    }
    else {
      $(".navigation").css({"background-color": "transparent"});
      $(".navigation").css({"box-shadow": "none"});
      $(".navigation__menu > li > a").css({"color":"white"});
      $("#logo_img").attr("src","./assets/images/logo.png");


    }
  })
})