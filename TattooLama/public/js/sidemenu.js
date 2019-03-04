setTimeout(function(){

var AltezzaElement = $(".sidebar").outerHeight();
var AltezzaBox = $("#sticky-menu").outerHeight();

$(window).scroll(function () {

    
    if ($(window).scrollTop() > (AltezzaElement - AltezzaBox)) {
        $("#sticky-menu").css("position", "fixed");
        $("#sticky-menu").css("top", "20px");
    } else {
        $("#sticky-menu").css("position", "absolute");
        $("#sticky-menu").css("bottom", "auto");
        $("#sticky-menu").css("top", "0px");
    }   
});
}, 500);



