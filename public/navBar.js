$(window).scroll(function () {
  $("nav-bar2").toggleClass("scroll", $(this).scrollTop() > 50);
});
