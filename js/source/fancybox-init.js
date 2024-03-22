/**
 * @file
 * A JavaScript file for the theme.
 *
 */
// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth

(function (Drupal) {
  'use strict';

  // To understand behaviors, see https://www.drupal.org/node/2269515
  Drupal.behaviors.fancybox_init = {
    attach: function (context, settings) {
      // init fancybox elements
      let fancyElements = document.querySelector('[data-fancybox]');
      if (fancyElements) {
        Fancybox.bind("[data-fancybox]", {
          // Your custom options
        });
      }
    },
  };
})(Drupal);