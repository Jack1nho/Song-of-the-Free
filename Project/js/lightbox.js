var modal = document.getElementById('myLightbox');
var modalImg = document.getElementById("img01");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');

var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];
var img3 = document.getElementsByClassName("img3")[0];
var img4 = document.getElementsByClassName("img4")[0];
var img5 = document.getElementsByClassName("img5")[0];

function well(id){
    modal.style.display = "block";
    modalImg.src = id;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeX")[0];
var nextimg = document.getElementsByClassName("next")[0];
var previmg = document.getElementsByClassName("prev")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

nextimg.onclick = function() {
    if(modalImg.src == img1.src) {modalImg.src = img2.src; return}
    if(modalImg.src == img2.src) {modalImg.src = img3.src; return}
    if(modalImg.src == img3.src) {modalImg.src = img4.src; return}
    if(modalImg.src == img4.src) {modalImg.src = img5.src; return}
}

previmg.onclick = function() {
    if(modalImg.src == img2.src) {modalImg.src = img1.src; return}
    if(modalImg.src == img3.src) {modalImg.src = img2.src; return}
    if(modalImg.src == img4.src) {modalImg.src = img3.src; return}
    if(modalImg.src == img5.src) {modalImg.src = img4.src; return}
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).on('keydown',  function (e) {
    if($('#myLightbox').is(':visible')) {
                var key = e.which;
                    if (key == 37) { 
                        if(modalImg.src == img2.src) {modalImg.src = img1.src; return}
                        if(modalImg.src == img3.src) {modalImg.src = img2.src; return}
                        if(modalImg.src == img4.src) {modalImg.src = img3.src; return}
                        if(modalImg.src == img5.src) {modalImg.src = img4.src; return}
                    }
                    if (key ==39) {
                        if(modalImg.src == img1.src) {modalImg.src = img2.src; return}
                        if(modalImg.src == img2.src) {modalImg.src = img3.src; return}
                        if(modalImg.src == img3.src) {modalImg.src = img4.src; return}
                        if(modalImg.src == img4.src) {modalImg.src = img5.src; return}
                    }
            }
        });