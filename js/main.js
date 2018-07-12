


function GetDaojishi() {
    var wait = 120;
    var btn = document.getElementById("btn");
    {
        if (wait == 0) {
            document.getElementById("btn").removeAttribute("disabled");
            document.getElementById("btn").value = "获取验证码";
            btn.type = "submit";
            btn.style.cssText = "font-size:4rem;border: none;outline: none;display:inline-block;background-color: transparent;color: #007AFF;width:340px;height: 10rem;"
            wait = 120;
        } else {
            document.getElementById("btn").setAttribute("disabled", true);


            var timer = setInterval(function () {
                    if (wait >= 0) {
                        document.getElementById("btn").value = wait + "s";

                        btn.style.cssText = "font-size:4rem;border: none;outline: none;display:inline-block;color: #bbbbbb;background-color: transparent;float: right;margin-right: 60px;width:150px;height: 10rem;"
                    }


                    wait--;
                    if (wait <= 0) {
                        clearInterval(timer);
                        document.getElementById("btn").removeAttribute("disabled");
                        document.getElementById("btn").value = "获取验证码";
                        btn.type = "submit";
                        btn.style.cssText = "font-size:4rem;border: none;outline: none;display:inline-block;background-color: transparent;color: #1caaf0;width:340px;height: 10rem;"
                    }
                },
                1000)
        }
        return wait;

    }
}
function Toast(msg, duration) {
    duration = isNaN(duration) ? 3000 : duration;
    var m = document.createElement('div');
    m.innerHTML = msg;
    m.style.cssText = "width: 60%;min-width: 10rem; display: inline-block;opacity: 0.7;height: 10rem;color: rgb(255, 255, 255);line-height: 10rem;text-align: center;border-radius: 2rem;position: fixed;top: 40%;left: 20%;z-index: 999999;background: rgb(0, 0, 0);font-size: 4rem;";
    document.body.appendChild(m);
    setTimeout(function () {
        var d = 0.5;
        m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function () {
            document.body.removeChild(m)
        }, d * 1000);
    }, duration);
}
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)return unescape(r[2]);
    return null;
}
function GetQueryString1(name) {
    // var data1 = ['banner_xiaohua-ningqingren', 'banner_guangda-yangguang', 'banner_jiaotong-Y-POWER', 'banner_jiaotong-biaozhun', 'banner_zhaoshang-biaozhun', 'banner_zhongxin-ibaijin', 'bank_jiaotong', 'bank_guangda', 'bank_pingan', 'bank_zhongxin', 'bank_zhaoshang', 'bank_minsheng', 'bank_huifeng', 'bank_guangzhou', 'bank_gongshang', 'bank_xingye', 'bank_shanghai', 'bank_zheshang', 'bank_huaxia', 'loan_xiaohuaqianbao', 'loan_youyudai', 'loan_xiaoxiaojinrong', 'loan_xianjindaikuan', 'loan_boluodai', 'loan_zhouzhuanwang', 'loan_youzixinyong', 'loan_51kabao', 'loan_yibiaodao', 'loan_shengbei', 'loan_360jietiao', 'loan_shoujidai', 'loan_xiaoyingkadai'];
    // var data2 = ['广告位-小花钱包-年轻人的互联网钱包', '广告位-光大银行-阳光银联IC白金信用卡', '广告位-交通银行-Y-POWER信用卡', '广告位-交通银行-标准信用卡金卡', '广告位-招商银行-标准信用卡金卡', '广告位-中信银行-i白金信用卡', '交通银行', '光大银行', '平安银行', '中信银行', '招商银行', '民生银行', '汇丰银行', '广州银行', '工商银行', '兴业银行', '上海银行', '浙商银行', '华夏银行', '小花钱包', '有鱼贷', '小小金融', '现金借款', '菠萝贷', '周转王', '柚子信用', '51卡宝', '益秒到', '省呗', '360借条', '手机贷', '小赢卡贷']
    var data1 = ['banner_360-jietiao', 'bank_jiaotong', 'bank_guangda', 'bank_pingan', 'bank_zhongxin', 'bank_zhaoshang', 'bank_minsheng', 'bank_huifeng', 'bank_guangzhou', 'bank_gongshang', 'bank_xingye', 'bank_shanghai', 'bank_zheshang', 'bank_huaxia', 'loan_360jietiao','loan_xiaoxiaojinrong', 'loan_boluodai','loan_xiaohuaqianbao', 'loan_youyudai','loan_zhouzhuanwang','loan_shengbei',  'loan_shoujidai', 'loan_xiaoyingkadai'];
    var data2 = ['广告位-360借条', '交通银行', '光大银行', '平安银行', '中信银行', '招商银行', '民生银行', '汇丰银行', '广州银行', '工商银行', '兴业银行', '上海银行', '浙商银行', '华夏银行', '360借条', '小小金融', '菠萝贷','小花钱包', '有鱼贷', '周转王','省呗',  '手机贷', '小赢卡贷'];

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    var productzh = '';
    for (var i = 0; i < data1.length; i++) {
        if (r[2] == data1[i]) {
            productzh = data2[i];
        }
    }


    // alert(decodeURI(r[2]));

    return productzh;
}
//测试注册
var stop_flag=true;
$(".bank-button").on("click",function() {
    // if (!stop_flag) {
    //     return false;
    // }
    // stop_flag = false;
    // if (!flag) {
    //     return false;
    // }

    var u_Name = document.getElementById("u_Name").value;
    var u_CardId = document.getElementById("u_CardId").value;
    var u_Vcode = document.getElementById("u_Vcode").value;
    var u_Iphone = document.getElementById("u_Iphone").value;

    var regPhone = /^1[3-9][0-9][\s\S]*$/;
    var regCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
    var regCard2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    if ((u_CardId.length === 15)) {
        if (!(regCard1.test(u_CardId))) {
            Toast("请输入正确的身份证号码", 2000);
            return false;
        }

    }
    if (( u_CardId.length === 18)) {
        // alert(regCard2.test(u_CardId))
        if (!(regCard2.test(u_CardId))) {
            Toast("请输入正确的身份证号码", 2000);
            return false;
        }

    }
    if (u_CardId.length != 15 && u_CardId.length != 18) {
        Toast("请输入正确的身份证号码", 2000);
        return false;
    }
    if (!regPhone.test(u_Iphone)) {
        Toast("请输入正确的手机号", 2000);
        return false;
    }
    if (!(u_Vcode.length === 6)) {
        Toast("请输入正确的验证码", 2000);
        return false;
    }
    if ((u_Name.length < 0)) {

        Toast("姓名不能为空！", 2000);
        return false;

    }
    var url_ch = window.location.href;
    // console.log(url_ch);
    var ch_num = url_ch.indexOf('&ch=') + 4;
    var batch_num = url_ch.indexOf("&batch=");
    var ch_data = url_ch.substring(ch_num, batch_num);
    var batch_data = url_ch.substring(batch_num + 7, url_ch.length);
    console.log(ch_data);
    console.log(batch_data);
    $.ajax({
        type: "POST",
        url: "/record/save",
        data: {
            name: u_Name,
            code: u_Vcode,
            idNo: u_CardId,
            mobile: u_Iphone,
            batch: batch_data,
            ch: ch_data,
            product: GetQueryString1('product')
        },
        dataType: "json",
        timeout: 15000,

        beforeSend: function () {
            $("#indexTotal").hide();
            $(".qunIn").css("display", "none");
            $("#admin-detail").css("display", "none");
            $("#showMes").show();
        },
        complete: function () {
            $("#indexTotal").show();
            $("#showMes").hide();

        },
        success: function (data) {

            // Toast(data.msg,2000);
            if (data.status == 200) {

                var Url = window.location.href;
                var l = Url.indexOf("key=") + 4;
                var dataUrl = Url.substring(l, Url.length);
                l = dataUrl.indexOf('&ch=');
                dataUrl = dataUrl.substring(0, l);
                // alert(dataUrl);
                window.location.href = dataUrl;

                // alert(data.msg)
            } else {
                Toast(data.msg, 2000);

            }
            // stop_flag = true;
        }
    })
})
