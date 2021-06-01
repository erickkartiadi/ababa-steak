$(document).ready(function () {
  //* change navbar color onscroll
  $(window).scroll(function () {
    if (window.matchMedia("screen and (min-width: 768px)").matches) {
      if ($(window).scrollTop() > $(".navigation").height()) {
        $(".navigation").css({ "background-color": "white" });
        $(".navigation").css({
          "box-shadow": "0 4px 10px -4px rgba(0, 0, 0, 0.2)",
        });
        $(".navigation__menu > li > a").css({ color: "black" });
        $("#logo_img").attr("src", "./assets/images/logo-black.png");
        $(".navigation__menu > li > a").addClass("invert");
      } else {
        $(".navigation").css({ "background-color": "transparent" });
        $(".navigation").css({ "box-shadow": "none" });
        $(".navigation__menu > li > a").css({ color: "white" });
        $("#logo_img").attr("src", "./assets/images/logo.png");
        $(".navigation__menu > li > a").removeClass("invert");
      }
    }
  });

  $("#navbar-toggle").click(function () {
    if ($(".navigation__menu-expand").css("display") == "none") {
      $(".navigation__menu-expand").css({
        display: "flex",
      });
    } else {
      $(".navigation__menu-expand").css({
        display: "none",
      });
    }
  });
});
