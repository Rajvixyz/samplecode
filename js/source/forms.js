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
    Drupal.behaviors.radioValidation = { 
      attach: function (context, settings) { 
  
        // Watch for the introduction of error messages on radio and checkbox form elements,
        // relocated error messages to fieldset element.
        const webform = context.querySelector('form.webform-submission-form');
        const config = { childList: true, subtree: true };
        
        if (!webform) {
          return;
        }
  
        const callback = (mutationList, observer) => {
          for (const mutation of mutationList) {
            if (mutation.type === 'childList' && mutation.target.classList.contains('js-form-type-radio') || mutation.type === 'childList' && mutation.target.classList.contains('js-form-type-checkbox')) {
  
              const fieldSet = mutation.target.parentNode;
              const children = Array.from(mutation.target.children);
  
              children.forEach(child => {
                if (child.classList.contains('form-item--error-message')) {
                  
                    const error = child;

                    //fieldSets with multiple inputs (ex: column of radios) will display one error at end of fieldSet. Single-input fieldSets will display error message after the checkbox/radio  
                    if (fieldSet.classList.contains('js-webform-radios') || fieldSet.classList.contains('js-webform-checkboxes')) {
                        fieldSet.append(error);
                    } else {
                        mutation.target.after(error);
                    }
                
                }
              });
  
            } 
          }
        };
  
        const observer = new MutationObserver(callback);
        observer.observe(webform, config);
      },
    };
  })(Drupal);