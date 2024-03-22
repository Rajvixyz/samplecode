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
  Drupal.behaviors.navigation = {
    attach: function (context, settings) {

      /* Open/Close Mobile Navigation
       * ----------------------------------------------- */
      const mobileNav = document.querySelector('.header__mobile-navigation');
      const navToggle = document.querySelector('.header .menu-toggle');
      const body = document.querySelector('body');

      navToggle.addEventListener('click', function () {
        mobileNav.classList.toggle('active');
        body.classList.toggle('locked');
        navToggle.classList.toggle('active');
      });

      /* Open/Close Sub Nav's on Mobile
       * ----------------------------------------------- */
      const subNavToggles = document.querySelectorAll('.header__mobile-navigation .nav-toggle');

      if (subNavToggles) {
        subNavToggles.forEach(toggle => {
          toggle.addEventListener('click', function () {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('active');
            this.previousElementSibling.classList.toggle('active');
          });
        });
      }

      /* Add hover effect to menu items
       * ----------------------------------------------- */

      $('.subnav_main__submenu').on('mouseenter', function () {
        const parentMenuItem = $(this).closest('.menu_main__item');
        parentMenuItem.find('a').addClass('active'); // Add "active" class to the parent menu item
      });

      $('.subnav_main__submenu').on('mouseleave', function () {
        const parentMenuItem = $(this).closest('.menu_main__item');
        parentMenuItem.find('a').removeClass('active'); // Remove "active" class from parent menu items
      });
    },
  };
})(Drupal);