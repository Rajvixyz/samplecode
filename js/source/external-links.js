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
  Drupal.behaviors.externalLinks = {
    attach: function (context, settings) {

      // loop through all external links, and append external link icon SVG
      document.querySelectorAll("[href^='http']:not(.sm_link)").forEach((element) => {
        let a = new RegExp('/' + window.location.host + '/');
        if (!a.test(element.href)) {
          if (!element.classList.contains('external-link-icon-added')) {
            element.classList.add('external-link-icon-added');
            element.innerHTML += `<span class="visually-hidden"> (${Drupal.t(
              'external link'
            )})</span><svg viewbox='0 0 16 16' class='external_icon' tabindex='-1' focusable='false' aria-hidden='true'><use xlink:href='#external'></use></svg>`;
            element.target = '_blank';
          }
        }
      });
    },
  };
})(Drupal);