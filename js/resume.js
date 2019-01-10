(function($) {
  "use strict";
  // Ferme le menu quand on clique sur un lien
    $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
})(jQuery); // End of use strict

var v = document.getElementById("video");
var p = document.getElementById('image')

/* v.addEventListener('play', function(){
  document.getElementsByTagName("body").style.overflow = 'hidden';
}) */

v.addEventListener('ended', function(){
  v.style.display = 'none';
  v.load(); 
}, false);


