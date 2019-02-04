var AltezzaElement = $(".sidebar").outerHeight();
var AltezzaBox = $("#sticky-menu").outerHeight();

$(window).scroll(function () {
    if ($(window).scrollTop() > (AltezzaElement - AltezzaBox)) {
        $("#sticky-menu").css("position", "absolute");
        $("#sticky-menu").css("bottom", "30px");
    } else {
        $("#sticky-menu").css("position", "fixed");
        $("#sticky-menu").css("bottom", "auto");
    }
});