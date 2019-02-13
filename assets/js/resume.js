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
var ex = document.getElementById("exitbtn")
var p = document.getElementById('dumb')
var vb = document.getElementById('video-background')
var lgc = document.getElementById('logocv')
var lgg = document.getElementById('logogit')
var b = document.getElementById('page-top')
var checkbox = document.getElementById('check');
var screencheck = window.matchMedia("(min-width: 800px)");

/* Parametre video background */
 vt.addEventListener('playing', function(){
  b.style.overflow = 'hidden';
  v.style.display='block';
}) 

var stop =v.addEventListener('ended', function(){
  v.style.display = 'none';
  b.style.overflow = "";
}, true);

/* Checkbox function */
/* affiche la video fullscreen en display block puis play la video au bout de 0sec et 
modifie les attribut du theme et des videos afin de passer au theme du site n°2 au bout de 3 ou 5 s selon video pour eviter bug */
function image(){
    if (checkbox.checked != true){
      v.style.display='block';
        setTimeout(function() {
          vt.play()});
        setTimeout(function (){
          b.classList.add("volde");
          vb.setAttribute("poster","assets/image/videofondphoto2.png");
          vb.setAttribute("src","assets/video/darkcin.mp4");
          p.setAttribute("src","assets/image/voldemort.jpg");
          lgc.setAttribute("src","assets/image/Logocvcv2.png");
          lgg.setAttribute("src","assets/image/LogoGithub2.png");
        }, 3000);
        vt.setAttribute("src","assets/video/dumb4s.mp4");
    }
    else {
      v.style.display='block';
        setTimeout(function() {
          vt.play()});
        setTimeout(function() {
          b.classList.remove("volde");
          vb.setAttribute("poster","assets/image/videofondphoto1.png");
          vb.setAttribute("src","assets/video/sky5s.mp4");
          p.setAttribute("src","assets/image/dumbledore2.jpg");
          lgc.setAttribute("src","assets/image/Logocvcv.png");
          lgg.setAttribute("src","assets/image/LogoGithub.png");
          }, 5000);
        vt.setAttribute("src","assets/video/vold7s.mp4");
        }
    }

  /*   Permet de modifier la source image on/hover */
  //Affecte la nouvelle image lorsque la souris survole l'élément
  function passageDeLaSouris(element) {
    if (checkbox.checked != true) {
      element.setAttribute('src', "assets/gif/dumbGif.gif");
  } else {
    element.setAttribute('src', "assets/gif/voldGif.gif");}
  }
  //Affecte l'image de départ lorsque la souris ne survole plus l'élément
  function departDeLaSouris(element) {
  if (checkbox.checked != true) {
  element.setAttribute('src', "assets/image/dumbledore2.jpg");
  } else {
    element.setAttribute('src', "assets/image/voldemort.jpg");}
  }
/*   function qui permet de ne pas lancer l'autoplay de la video en background
 sur les devices de moins de 600pixels de largeurs 
 (permet de ne pas utiliser trop de data sur portables) */
    $(document).ready(function(){
      var screenWidth = $(window).width();
      if (screenWidth < 600){
            $('video').removeAttr('autoplay');
      } else {
        $('video').attr('autoplay');
      }
    });