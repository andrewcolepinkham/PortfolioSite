$(document).ready(function () {

  $('.menu-toggler').on('click', function () {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  $('.top-nav .nav-link').on('click', function () {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  });

  $('nav a[href*="#"]').on('click', function () {
    $('html, body').animate( {
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, 2000);
  });

  $('#up').on('click', function () {
    $('html, body').animate( {
      scrollTop: 0
    }, 2000);
  });

  AOS.init({
    easing: 'ease',
    duration: 700,
    once: true
  });

  $('.fa-facebook-square').on('click', function () {
    window.open("https://www.facebook.com/andrew.pinkham.9");
  });

  $('.fa-linkedin').on('click', function () {
    window.open("https://www.linkedin.com/in/andrew-pinkham-53309a167/");
  });

  $('.fa-instagram').on('click', function () {
    window.open("https://www.instagram.com/andrew_pinkham/?hl=en");
  });
  $('.fa-github').on('click', function () {
    window.open("https://github.com/andrewcolepinkham");
  });
});
