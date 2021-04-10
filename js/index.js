$(document).ready(function() {


  //* Menu Slider Function
  let sliderWrapper = $("#featuredMenuSlider");
  let card = $("#featuredMenuSlider .menu").first();

  // find scroll value
  let cardWidth = card.innerWidth();
  let margin = parseInt(card.css("margin").replace('px', ''));
  let scrollValue = (cardWidth + (margin * 2)) * 2;
  
  

  $("#featuredMenuSliderLeft").click(function () {
    sliderWrapper.animate({"scrollLeft": `-=${scrollValue}px`}, 400);
  })

  $("#featuredMenuSliderRight").click(function () {
    sliderWrapper.animate({"scrollLeft": `+=${scrollValue}px`}, 400);  
  })
})

