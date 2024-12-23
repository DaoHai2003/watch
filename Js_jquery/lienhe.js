$(document).ready(function () {
    $('.TPHCM_1').click(function () { 
        $('.Hanoi_1, .DaNang_1, .HaiPhong_1, .BH-BD_1').removeClass('borderselect');
        $('.TPHCM_1').addClass('borderselect');
    });
    $('.Hanoi_1').click(function () { 
        $('.TPHCM_1, .DaNang_1, .HaiPhong_1, .BH-BD_1').removeClass('borderselect');
        $('.Hanoi_1').addClass('borderselect');
    });
    $('.DaNang_1').click(function () { 
        $('.TPHCM_1, .Hanoi_1, .HaiPhong_1, .BH-BD_1').removeClass('borderselect');
        $('.DaNang_1').addClass('borderselect');
    });
    $('.HaiPhong_1').click(function () { 
        $('.TPHCM_1, .DaNang_1, .Hanoi_1, .BH-BD_1').removeClass('borderselect');
        $('.HaiPhong_1').addClass('borderselect');
    });
    $('.BH-BD_1').click(function () { 
        $('.TPHCM_1, .DaNang_1, .HaiPhong_1, .Hanoi_1').removeClass('borderselect');
        $('.BH-BD_1').addClass('borderselect');
    });
    
});