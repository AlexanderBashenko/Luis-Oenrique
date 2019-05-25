$(function(){
    $('.btn__menu').on('click', function(){
      $('.menu ul').slideToggle();
    });


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

    $(".menu, .go__to-home").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
    
      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),
    
      //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
      
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 1500);
    });








    wow.init();
// new WOW().init();

});