$(document).ready(function () {
    $('.mb_txt_ut_2,.mb_txt_ut_3,.mb_txt_ut_4,.mb_txt_ut_1').slideUp();
    $('.slide_toggle_ut_1').click(function () { 
        $('.mb_txt_ut_2,.mb_txt_ut_3,.mb_txt_ut_4').slideUp();
        $('.mb_txt_ut_1').slideToggle();
    });
    $('.slide_toggle_ut_2').click(function () { 
        $('.mb_txt_ut_1,.mb_txt_ut_3,.mb_txt_ut_4').slideUp();
        $('.mb_txt_ut_2').slideToggle();
    });
    $('.slide_toggle_ut_3').click(function () { 
        $('.mb_txt_ut_2,.mb_txt_ut_1,.mb_txt_ut_4').slideUp();
        $('.mb_txt_ut_3').slideToggle();
    });
    $('.slide_toggle_ut_4').click(function () { 
        $('.mb_txt_ut_2,.mb_txt_ut_3,.mb_txt_ut_1').slideUp();
        $('.mb_txt_ut_4').slideToggle();
    });
});
// form đăng nhập
$(document).ready(function () {
    $(".click_login").click(function () { 
        $(".form_login").addClass("form_show");
        $(".menu_overlay").fadeToggle(); 
    });
    $(".main, .menu_overlay").click(function () {
        $(".form_login").removeClass("form_show");
        $(".menu_overlay").fadeOut(); 
    });
});
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
// tư vấn login
$(document).ready(function () {
    $(".form_mess_login ").click(function () { 
        $(".form_mess_login").toggleClass("anime_mess_login");
        
    });
    $(".btn_mess_user ").click(function () { 
        $(".form_fix").toggleClass("form_fix_1");
        
    });
});
// tư vấn login

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



// tab 
// tab sản phẩm
$(document).ready(function () {
    $(".tab_list_1").addClass('tab_list');
    $(".tab_thuong_hieu .price").click(function () {
      let index = $(this).index(); 
      $(".tab_list").removeClass("tab_list"); 
      $(".tab_list_" + (index + 1)).addClass("tab_list"); 
  });
    $(".tab_1").addClass('tab_bck');
    $(".tab_thuong_hieu .price").click(function () {
      let index = $(this).index(); 
      $(".tab_bck").removeClass("tab_bck"); 
      $(".tab_" + (index + 1)).addClass("tab_bck"); 
  });
  
});
