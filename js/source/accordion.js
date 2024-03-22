/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */
// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function (Drupal) {
	'use strict';

	// To understand behaviors, see https://www.drupal.org/node/2269515
	Drupal.behaviors.accordions = {
		attach: function (context, settings) {
			const expandButtons = document.querySelectorAll('.accordion-expand-all');
			const collapseButtons = document.querySelectorAll('.accordion-collapse-all');

			// make sure buttons exist
			if (expandButtons) {
				// add an event listener to each button
				expandButtons.forEach(button => {

					// for each button, find the accordions that exist in the group and open them
					button.addEventListener('click', function () {
						const groupParent = button.parentNode.parentNode.parentNode
						const accordions = groupParent.querySelectorAll('details');

						// open each accordion
						accordions.forEach(accordion => {
							accordion.setAttribute('open', 'true');
						});
					});
				});

				// add an event listener to each button
				collapseButtons.forEach(button => {

					// for each button, find the accordions that exist in the group and open them
					button.addEventListener('click', function () {
						const groupParent = button.parentNode.parentNode.parentNode
						const accordions = groupParent.querySelectorAll('details');

						// close each accordion
						accordions.forEach(accordion => {
							accordion.removeAttribute('open');
						});
					});
				});
			}
		},
	};
})(Drupal);


// (function ($) {
//     $(function () {
//         // Expand all
//         $('.accordion-expand-all').on('click', function () {
//             $('details').attr('open', true);
//         });

//         // Collapse all
//         $('.accordion-collapse-all').on('click', function () {
//             $('details').removeAttr('open');
//         });
//     });
// })(jQuery);