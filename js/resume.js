(function($) {
  "use strict";
  // Ferme le menu quand on clique sur un lien
    $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
})(jQuery); // End of use strict

var v = document.getElementById("video-theme");
var vt = document.getElementById("videot")
var p = document.getElementById('dumb')
var vb = document.getElementById('video-background')
var b = document.getElementById('page-top')

/* Modification apres click */
/* function image() {
  v.style.display='block';
  p.setAttribute("src","css/Image/voldemort.jpg")
  vb.setAttribute("src","darkcin.mp4")
} */
 /* Parametre video background */
 vt.addEventListener('playing', function(){
  b.style.overflow = 'hidden';
}) 

vt.addEventListener('ended', function(){
  v.style.display = 'none';
  b.style.overflow = "";
}, true);

/* Checkbox function */
function image(){

  var checkbox = document.getElementById('check');


    if (checkbox.checked != true){
      v.style.display='block';
      setTimeout(function() {
        p.setAttribute("src","css/Image/voldemort.jpg");
        b.classList.add("volde");
      }, 7000);
      vb.setAttribute("src","darkcin.mp4");
      vt.setAttribute("src","cutnew.mp4");
    }
    else {
      v.style.display='block';
      setTimeout(function() {
        p.setAttribute("src","css/Image/dumbledore2.jpg");
        b.classList.remove("volde");
      }, 7000);
      vb.setAttribute("src","sky.mp4");
      vt.setAttribute("src","voldcut.mp4");
      }
}

/* function image() {
  var element = document.getElementById("page-top");
  
} */

/* function image() {
  var body = document.getElementById("page-top");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
} */
