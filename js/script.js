$(document).ready(function() {

  let sliderWrapper = $("#slider-wrapper");
  let card = $("#slider-wrapper .menu").first();

  // find scroll value
  let cardWidth = card.innerWidth();
  let margin = parseInt(card.css("margin").replace('px', ''));
  let scrollValue = (cardWidth + (margin * 2)) * 2;
  
  
  let width = sliderWrapper.width();
  let scrollWidth = $("#slider-wrapper").get(0).scrollWidth;
  let newScrollLeft = 0;
  let calc = 0;
  

  $("#slider-right").click(function () {
    sliderWrapper.animate({"scrollLeft": `+=${scrollValue}px`}, 400);
  })

  $("#slider-left").click(function () {
    sliderWrapper.animate({"scrollLeft": `-=${scrollValue}px`}, 400);  
  })
})