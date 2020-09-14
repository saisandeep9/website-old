$(window).scroll(function () {
  $("nav-bar2").toggleClass("scrolled", $(this).scrollTop() > 50);
});
