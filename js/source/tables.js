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
  Drupal.behaviors.tables = {
    attach: function (context, settings) {
      const wrapTable = (element) => {
        // skip current table if already wrapped or if current is a nested table
        if (
          element.parentNode.classList.contains('table-wrapper') ||
          element.parentNode.closest('table')
        ) {
          return;
        }

        // if current table has a wrapping element with no class, add table-wrapper class
        if (
          'DIV' === element.parentNode.tagName &&
          !element.parentNode.classList.length
        ) {
          element.parentNode.classList.add('table-wrapper');

          return;
        }

        let tableWrapper = document.createElement('div');
        tableWrapper.classList.add('table-wrapper');

        element.parentNode.insertBefore(tableWrapper, element);
        tableWrapper.appendChild(element);
      };

      context.querySelectorAll('main table').forEach((element) => {
        wrapTable(element);
      });

    },
  };
})(Drupal);