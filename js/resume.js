(function($) {
  "use strict";
  // Ferme le menu quand on clique sur un lien
    $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
})(jQuery); // End of use strict

/* Classement des variables */
var v = document.getElementById("video-theme");
var vt = document.getElementById("videot")
var p = document.getElementById('dumb')
var vb = document.getElementById('video-background')
var b = document.getElementById('page-top')
var checkbox = document.getElementById('check');

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
    if (checkbox.checked != true){
      v.style.display='block';
      setTimeout(function() {
        vt.play()});
      setTimeout(function (){
        p.setAttribute("src","Image/voldemort.jpg");
        b.classList.add("volde");
        vb.setAttribute("src","video/darkcin.mp4");
      }, 5000);
      vt.setAttribute("src","video/cutnew.mp4");
    }
    else {
      v.style.display='block';
        setTimeout(function() {
          vt.play()});
        setTimeout(function() {
          p.setAttribute("src","Image/dumbledore2.jpg");
          b.classList.remove("volde");
          vb.setAttribute("src","video/sky.mp4");
          }, 5000);
        vt.setAttribute("src","video/voldcut.mp4");
        }
    }

