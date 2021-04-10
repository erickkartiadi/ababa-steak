$(document).ready(function() {

  //* Deal Slider Function
  let dealSliderWrapper = $("#dealSliderWrapper");
  let dealCard = $("#dealSliderWrapper .deal").first();

  // find scroll value
  let dealCardWidth = dealCard.innerWidth();
  let dealCardMargin = parseInt(dealCard.css("marginRight").replace('px', ''));
  let dealSliderScrollValue = (dealCardWidth + (dealCardMargin * 2)) * 1;
  
  

  $("#dealSliderWrapperRight").click(function () {
    dealSliderWrapper.animate({"scrollLeft": `+=${dealSliderScrollValue}px`}, 400);
  })

  $("#dealSliderWrapperLeft").click(function () {
    dealSliderWrapper.animate({"scrollLeft": `-=${dealSliderScrollValue}px`}, 400);  
  });

  
  //* Deal Slider Function
  let couponSliderWrapper = $("#couponSliderWrapper");
  let couponCard = $("#couponSliderWrapper .coupon").first();

  // find scroll value
  let couponCardWidth = couponCard.innerWidth();
  let couponCardMargin = parseInt(couponCard.css("marginRight").replace('px', ''));
  let couponSliderScrollValue = (couponCardWidth + (couponCardMargin * 1)) * 1;
  
  

  $("#couponSliderWrapperRight").click(function () {
    couponSliderWrapper.animate({"scrollLeft": `+=${couponSliderScrollValue}px`}, 400);
  })

  $("#couponSliderWrapperLeft").click(function () {
    couponSliderWrapper.animate({"scrollLeft": `-=${couponSliderScrollValue}px`}, 400);  
  })

})

