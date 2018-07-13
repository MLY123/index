var size = 20;
var w = $(window).width();
$(document).ready(function () {
    var size_w = w / 37.5;
    $("html").css("font-size",size_w + "px")
});
$(window).resize(function () {
    var w = $(window).width();
    var size_w = w / 37.5;
    $("html").css("font-size",size_w + "px")
});
$("#btn").on("click",function(){

//            alert("22222");
//            var regPhone = /^1[3-9][0-9][\s\S]*$/;
    var user_Name = document.getElementById("user_Name").value;
    var u_Name = document.getElementById("u_Name").value;
    var u_CardId = document.getElementById("u_CardId").value;
//            if (u_Iphone.length <= 0) {
//
//                Toast("手机号不能为空！", 2000);
//                return false;
//            }
//            if (u_Iphone.length != 11) {
//                Toast("请输入正确的手机号码！", 2000);
//                return false;
//            }
//            if (u_Iphone.length == 11) {
//                if (!regPhone.test(u_Iphone)) {
//                    Toast("请输入正确的手机号码！", 2000);
//                    return false;
//                }
//
//            }

    $.ajax({
        type: "POST",
        url: _testIpcrsUrl_,
        data: {loginName:user_Name,
            name:u_Name,
            idNo:u_CardId,
            method:"forget_pw",
            idType: "0"},
        dataType: "jsonp",
        timeout: 15000,
        jsonpCallback:"callback",

        success: function (data) {
            alert(JSON.stringify(data))
            console.log(JSON.stringify(data))
            if(data !== null){
                window.location.href = "findpassword2.html"
            }

//                    if (data.status == 200) {
//                        var testData =  JSON.stringify(data)
//                        window.sessionStorage.setItem('product', testData);
//
//                        window.location.href = "test.html"
///                       Toast('验证码获取成功', 2000);
//                    } else {
//                        Toast(data.msg, 2000);
//                    }


        }
    })
})