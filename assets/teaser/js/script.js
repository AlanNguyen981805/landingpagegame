$(document).ready(function() {
    $('.product__slider').slick({
        autoplay: 2000,
        autoplaySpeed: 1500,
        speed: 600,
        draggable: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor: '.nav__slider'
    });
    $('.nav__slider').slick({
        slidesToShow:3,
        slidesToScroll: 1,
        asNavFor: '.product__slider',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });
});