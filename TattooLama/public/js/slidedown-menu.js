window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("top-sticky-menu").style.top = "0";
  } else {
    document.getElementById("top-sticky-menu").style.top = "-76px";
  }
}