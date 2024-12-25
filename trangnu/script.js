(function ($) {
    $(function () {
      $('.slider').slick({
        // dots: true,
        speed:300,
        autoplay: true,
        // prevArrow: '<a class="slick-prev slick-arrow" href="#" style=""><div class="icon icon--ei-arrow-left"><svg class="icon__cnt"><use xlink:href="#ei-arrow-left-icon"></use></svg></div></a>',
        prevArrow: '<a class="slick-prev slick-arrow" href="#" style=""><i class="fa fa-angle-left"  id="ei-arrow-left-icon" style="font-size:40px"><use xlink:href="#ei-arrow-left-icon"></use></i></a>',
        nextArrow: '<a class="slick-next slick-arrow" href="#" style=""><i class="fa fa-angle-right"  id="ei-arrow-right-icon" style="font-size:40px"><use xlink:href="#ei-arrow-right-icon"></use></i></a>',
        // customPaging: function (slick, index) {
        //   var targetImage = slick.$slides.eq(index).find('img').attr('src');
        //   return '<img src=" ' + targetImage + ' "/>';
        // }
      });  
    });
  })(jQuery);