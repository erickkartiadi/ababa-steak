$(document).ready(function() {

  //* Deal Slider Function
  let sliderWrapper = $("#dealSliderWrapper");
  let card = $("#dealSliderWrapper .deal").first();

  // find scroll value
  let cardWidth = card.innerWidth();
  let margin = parseInt(card.css("marginRight").replace('px', ''));
  let scrollValue = (cardWidth + (margin * 2)) * 1;
  
  

  $("#dealSliderWrapperRight").click(function () {
    sliderWrapper.animate({"scrollLeft": `+=${scrollValue}px`}, 400);
  })

  $("#dealSliderWrapperLeft").click(function () {
    sliderWrapper.animate({"scrollLeft": `-=${scrollValue}px`}, 400);  
  })
})

