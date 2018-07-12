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
