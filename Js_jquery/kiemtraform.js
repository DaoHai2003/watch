$(document).ready(function () {
    // Kiểm tra Tên đăng ký 
    $(".input_user:first input").on("input", function () {
        const username = $(this).val();
        const usernameRegex = /^[a-zA-Z0-9]{8,}$/;

        if (!username) {
            $(this).siblings(".error-message").text("Tên đăng ký không được để trống!");
        } else if (!usernameRegex.test(username)) {
            $(this).siblings(".error-message").text("Tên đăng ký phải có ít nhất 8 ký tự và không chứa ký tự đặc biệt!");
        } else {
            $(this).siblings(".error-message").text("");
        }
    });

    // Kiểm tra Email
    $(".input_user:nth-of-type(2) input").on("input", function () {
        const email = $(this).val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            $(this).siblings(".error-message").text("Email không được để trống!");
        } else if (!emailRegex.test(email)) {
            $(this).siblings(".error-message").text("Email không hợp lệ!");
        } else {
            $(this).siblings(".error-message").text("");
        }
    });

    // Kiểm tra Mật khẩu
    $(".input_password:first input").on("input", function () {
        const password = $(this).val();

        if (!password) {
            $(this).siblings(".error-message").text("Mật khẩu không được để trống!");
        } else if (password.length < 8) {
            $(this).siblings(".error-message").text("Mật khẩu phải có ít nhất 8 ký tự!");
        } else {
            $(this).siblings(".error-message").text("");
        }
    });
      // Kiểm tra Nhập lại mật khẩu khi nhập
      $(".input_password:nth-of-type(2) input").on("input", function () {
        const confirmPassword = $(this).val(); // Giá trị của trường Nhập lại mật khẩu
        const password = $(".input_password:first input").val(); // Giá trị của trường Mật khẩu

        if (!confirmPassword) {
            $(this).parent().find(".error-message").text("Vui lòng nhập lại mật khẩu!"); // Lỗi: trống
        } else if (confirmPassword.length < 8) {
            $(this).parent().find(".error-message").text("Mật khẩu phải có ít nhất 8 ký tự!"); // Lỗi: không đủ ký tự
        } else if (password !== confirmPassword) {
            $(this).parent().find(".error-message").text("Mật khẩu nhập lại không khớp!"); // Lỗi: không khớp
        } else {
            $(this).parent().find(".error-message").text(""); // Xóa lỗi khi hợp lệ
        }
    });

    // Đồng thời kiểm tra khi nhập trường Mật khẩu để cập nhật lỗi cho Nhập lại mật khẩu
    $(".input_password:first input").on("input", function () {
        const password = $(this).val(); // Giá trị của trường Mật khẩu
        const confirmPassword = $(".input_password:nth-of-type(2) input").val(); // Giá trị của trường Nhập lại mật khẩu

        if (confirmPassword.length > 0 && confirmPassword.length < 8) {
            $(".input_password:nth-of-type(2) input")
                .parent()
                .find(".error-message")
                .text("Mật khẩu phải có ít nhất 8 ký tự!");
        } else if (confirmPassword && password !== confirmPassword) {
            $(".input_password:nth-of-type(2) input")
                .parent()
                .find(".error-message")
                .text("Mật khẩu nhập lại không khớp!");
        } else {
            $(".input_password:nth-of-type(2) input")
                .parent()
                .find(".error-message")
                .text(""); // Xóa lỗi khi hợp lệ
        }
    });


  
});