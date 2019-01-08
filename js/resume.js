(function($) {
  "use strict";
  // Ferme le menu quand on clique sur un lien
    $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
})(jQuery); // End of use strict
