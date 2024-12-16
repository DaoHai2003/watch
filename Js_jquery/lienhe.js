$(document).ready(function(){
    $('.Hanoi_cuahang').hide();
    $('.DaNang_cuahang').hide();
    $('.HaiPhong_cuahang').hide();
    $('.BH-BD_cuahang').hide();

    // HCM
    $('.TPHCM_1').click(function(){
        $('.TPHCM_cuahang').show();
        $('.Hanoi_cuahang').hide();
        $('.DaNang_cuahang').hide();
        $('.HaiPhong_cuahang').hide();
        $('.BH-BD_cuahang').hide();
        $('.TPHCM_1').addClass('borderselect');
        $('.Hanoi_1').removeClass('borderselect');
        $('.DaNang_1').removeClass('borderselect');
        $('.HaiPhong_1').removeClass('borderselect');
        $('.BH-BD_1').removeClass('borderselect');
    })
    // HÀ NỘI
    $('.Hanoi_1').click(function(){
        $('.Hanoi_cuahang').show();
        $('.TPHCM_cuahang').hide();
        $('.DaNang_cuahang').hide();
        $('.HaiPhong_cuahang').hide();
        $('.BH-BD_cuahang').hide();
        $('.Hanoi_1').addClass('borderselect');
        $('.TPHCM_1').removeClass('borderselect');
        $('.DaNang_1').removeClass('borderselect');
        $('.HaiPhong_1').removeClass('borderselect');
        $('.BH-BD_1').removeClass('borderselect');
    })
    // Đà Nẵng
    $('.DaNang_1').click(function(){
        $('.DaNang_cuahang').show();
        $('.HaiPhong_cuahang').hide();
        $('.BH-BD_cuahang').hide();
        $('.Hanoi_cuahang').hide();
        $('.TPHCM_cuahang').hide();
        $('.DaNang_1').addClass('borderselect');
        $('.Hanoi_1').removeClass('borderselect');
        $('.TPHCM_1').removeClass('borderselect');
        $('.HaiPhong_1').removeClass('borderselect');
        $('.BH-BD_1').removeClass('borderselect');
    })
    //  Hải Phòng
    $('.HaiPhong_1').click(function(){
        $('.HaiPhong_cuahang').show();
        $('.DaNang_cuahang').hide();
        $('.BH-BD_cuahang').hide();
        $('.Hanoi_cuahang').hide();
        $('.TPHCM_cuahang').hide();
        $('.HaiPhong_1').addClass('borderselect');
        $('.DaNang_1').removeClass('borderselect');
        $('.Hanoi_1').removeClass('borderselect');
        $('.TPHCM_1').removeClass('borderselect');
        $('.BH-BD_1').removeClass('borderselect');
    })
    // Biên Hòa - Bình Dương
    $('.BH-BD_1').click(function(){
        $('.BH-BD_cuahang').show();
        $('.HaiPhong_cuahang').hide();
        $('.DaNang_cuahang').hide();
        $('.Hanoi_cuahang').hide();
        $('.TPHCM_cuahang').hide();
        $('.BH-BD_1').addClass('borderselect');
        $('.HaiPhong_1').removeClass('borderselect');
        $('.DaNang_1').removeClass('borderselect');
        $('.Hanoi_1').removeClass('borderselect');
        $('.TPHCM_1').removeClass('borderselect');
       
    })

})