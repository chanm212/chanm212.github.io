$(document).ready(function() {

  console.log("hello");
  $(window).scrollTop();

  $(window).scroll(function() {
    if ($(document).scrollTop() > 1200 ) {
      $(".sixteen").css({position: "fixed"});
    }
    else {
      $(".sixteen").css({position: "absolute" });
    }

  });






});