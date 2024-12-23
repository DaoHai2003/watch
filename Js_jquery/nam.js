// $(document).ready(function () {
//     $('.filter_check_1,.filter_check_2,.filter_check_3,.filter_check_4,.filter_check_5').slideUp();
//     $('.slide_toggle_ut_1').click(function () { 
//         $('.filter_check_1').slideToggle();
//     });
//     $('.slide_toggle_ut_2').click(function () { 
//         $('.filter_check_2').slideToggle();
//     });
//     $('.slide_toggle_ut_3').click(function () { 
//         $('.filter_check_3').slideToggle();
//     });
//     $('.slide_toggle_ut_4').click(function () { 
//         $('.filter_check_4').slideToggle();
//     });
//     $('.slide_toggle_ut_5').click(function () { 
//         $('.filter_check_5').slideToggle();
//     });
   
// });
$(document).ready(function(){
  $('.filter_check_1,.filter_check_2,.filter_check_3,.filter_check_4,.filter_check_5').slideUp();
  $('.minus_1').hide();
  $('.plus_1').click(function(){
    $('.minus_1').fadeIn();
    $('.plus_1').fadeOut();
    $('.filter_check_1').slideDown();
  })
  $('.minus_1').click(function(){
    $('.plus_1').fadeIn();
    $('.minus_1').fadeOut();
    $('.filter_check_1').slideUp();
  })
  $('.minus_2').hide();
  $('.plus_2').click(function(){
    $('.minus_2').fadeIn();
    $('.plus_2').fadeOut();
    $('.filter_check_2').slideDown();
  })
  $('.minus_2').click(function(){
    $('.plus_2').fadeIn();
    $('.minus_2').fadeOut();
    $('.filter_check_2').slideUp();
  })

  $('.minus_3').hide();
  $('.plus_3').click(function(){
    $('.minus_3').fadeIn();
    $('.plus_3').fadeOut();
    $('.filter_check_3').slideDown();
  })
  $('.minus_3').click(function(){
    $('.plus_3').fadeIn();
    $('.minus_3').fadeOut();
    $('.filter_check_3').slideUp();
  })

  
  $('.minus_4').hide();
  $('.plus_4').click(function(){
    $('.minus_4').fadeIn();
    $('.plus_4').fadeOut();
    $('.filter_check_4').slideDown();
  })
  $('.minus_4').click(function(){
    $('.plus_4').fadeIn();
    $('.minus_4').fadeOut();
    $('.filter_check_4').slideUp();
  })

  $('.minus_5').hide();
  $('.plus_5').click(function(){
    $('.minus_5').fadeIn();
    $('.plus_5').fadeOut();
    $('.filter_check_5').slideDown();
  })
  $('.minus_5').click(function(){
    $('.plus_5').fadeIn();
    $('.minus_5').fadeOut();
    $('.filter_check_5').slideUp();
  })
})




// Footer reponsive
$(document).ready(function(){
  $(".menu_list_2").hide();
  $(".container").click(function(){
      $(".menu_list_2").fadeToggle();
  })
  $(".icon_close_2").click(function(){
      $(".menu_list_2").fadeOut();
  })

  // silde show hệ thống cửa hàng
  $(".icon_arrow_1").hide();
  $(".list_hethongshop").hide();
  $(".icon_arrow_2").click(function(){
      $(".icon_arrow_2").fadeOut();
      $(".icon_arrow_1").slideDown();
      $(".list_hethongshop").slideDown();
  })
  $(".icon_arrow_1").click(function(){
      $(".icon_arrow_1").fadeOut();
      $(".icon_arrow_2").slideDown();
      $(".list_hethongshop").slideUp();
  })

  // silde show  thống tin cửa hàng
  $(".icon_arrow_3").hide();
  $(".list_thongtinshop").hide();
  $(".icon_arrow_4").click(function(){
      $(".icon_arrow_4").fadeOut();
      $(".icon_arrow_3").slideDown();
      $(".list_thongtinshop").slideDown();
  })
  $(".icon_arrow_3").click(function(){
      $(".icon_arrow_3").fadeOut();
      $(".icon_arrow_4").slideDown();
      $(".list_thongtinshop").slideUp();
  })

  // silde show  liên hệ cửa hàng
  $(".icon_arrow_5").hide();
  $(".list_lienheshop").hide();
  $(".icon_arrow_6").click(function(){
      $(".icon_arrow_6").fadeOut();
      $(".icon_arrow_5").slideDown();
      $(".list_lienheshop").slideDown();
  })
  $(".icon_arrow_5").click(function(){
      $(".icon_arrow_5").fadeOut();
      $(".icon_arrow_6").slideDown();
      $(".list_lienheshop").slideUp();
  })
})
// menu_push
$(document).ready(function () {
  $(".menu-icon").click(function () {
      $(".menu_push").toggleClass("active_menu");
      $(".menu_overlay").fadeToggle(); 
  });

  $(".main, .menu_overlay").click(function () {
      $(".menu_push").removeClass("active_menu");
      $(".menu_overlay").fadeOut(); 
  });
});


// menu_push_giá
$(document).ready(function () {
  $(".price_click").click(function () {
      $(".filter_block").addClass("filter_block_active");
      $(".bk_black").addClass("bk_bl"); 
  });

  $(".bk_black").click(function () { 
    $(".filter_block").removeClass("filter_block_active");
    $(".bk_black").removeClass("bk_bl"); 
  });
});


$(document).ready(function(){
  $('#apply').click(function(){
    var price_min = $('#min_1').val();
    var price_max = $('#max_1').val();
    if(500 > price_min >= 0 && price_max <= 500){
      $('#price_1').addClass('borderselect');
      $('.grid_check div').not('#price_1').removeClass('borderselect');
    }
    else if(price_min >= 500 && price_max <= 1500){
      $('#price_2').addClass('borderselect');
      $('.grid_check div').not('#price_2').removeClass('borderselect');
    }
    else if(price_min >= 1500 && price_max <= 2500){
      $('#price_3').addClass('borderselect');
      $('.grid_check div').not('#price_3').removeClass('borderselect');
    }
    else if(price_min >= 2500 && price_max <= 5000){
      $('#price_4').addClass('borderselect');
      $('.grid_check div').not('#price_4').removeClass('borderselect');
    }
    else if(price_min >= 5000 && price_max <= 10000){
      $('#price_5').addClass('borderselect');
      $('.grid_check div').not('#price_5').removeClass('borderselect');
    }
    else if(price_min >= 10000){
      $('#price_6').addClass('borderselect');
      $('.grid_check div').not('#price_6').removeClass('borderselect');
    }
    else{
      $('.grid_check div').removeClass('borderselect');
    }
  }) 
})

// tab sản phẩm
$(document).ready(function () {
    $(".tab_list_1").addClass('tab_list');
    $(".filter_mb_price .price").click(function () {
      let index = $(this).index(); 
      $(".tab_list").removeClass("tab_list"); 
      $(".tab_list_" + (index + 1)).addClass("tab_list"); 
  });
  $(".tab_1").addClass('tab_bck');
  $(" .price").click(function () {
    let index = $(this).index(); 
    $(".tab_bck").removeClass("tab_bck"); 
    $(".tab_" + (index + 1)).addClass("tab_bck"); 
});
  
});


// 
$(document).ready(function () {
  // Khi hover vào menu chính
  $(".desktop-menu > li").on("mouseenter", function () {
      $(this).find(".dropdown-content").stop(true, true).slideDown(300);
  });

  // Khi rời khỏi menu chính
  $(".desktop-menu > li").on("mouseleave", function () {
      const dropdown = $(this).find(".dropdown-content");

      // Delay việc ẩn dropdown để kiểm tra trạng thái hover
      setTimeout(() => {
          if (!dropdown.is(":hover")) {
              dropdown.stop(true, true).slideUp(300);
          }
      }, 100);
  });

  // Khi chuột rời khỏi nội dung dropdown
  $(".dropdown-content").on("mouseleave", function () {
      $(this).stop(true, true).slideUp(300);
  });
});