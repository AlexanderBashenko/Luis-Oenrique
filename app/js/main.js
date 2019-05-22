$(function(){
    $('.slider__inner').slick({
        dots: true,
        prevArrow: null,
        nextArrow: null,
        infinite: false,
        responsive: [
        {
          breakpoint: 901,
          settings: {
            arrows: false
          }
        }
      ]
    });









new WOW().init();

});