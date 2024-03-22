/**
 * @file
 * A JavaScript file for the theme.
 *
 * Finds links in Related Documents paragraphs and adds either e doc icon, or pdf icon. 
 * The paragraph also expects external icons, but that's already handled by external-links.js
 */

(function (Drupal) {
  'use strict';

  // To understand behaviors, see https://www.drupal.org/node/2269515
  Drupal.behaviors.qa = {
    attach: function (context, settings) {
      const QAsettings = document.querySelector('.qa-settings');

      if (QAsettings) {
        const settingsInputs = QAsettings.querySelectorAll('input');
        const docBody = document.querySelector('.dialog-off-canvas-main-canvas');

        updateSettingsPageLoad();

        settingsInputs.forEach(input => {
          input.addEventListener('click', function () {
            updateSettings();
          });
        });

        function updateSettings() {
          settingsInputs.forEach(input => {
            if (input.checked) {
              docBody.classList.add(input.name);
              setCookie('ypqa_' + input.name, true);
            } else {
              docBody.classList.remove(input.name);
              eraseCookie('ypqa_' + input.name);
            }
          });
        }

        function updateSettingsPageLoad() {
          const allCookies = document.cookie.split(';');
          const qaCookies = [];

          allCookies.forEach(cookie => {
            if (cookie.slice(1, 5) == 'ypqa' && cookie.slice(-4) == 'true') {
              // remove ypqa_  and =true from cookie and add to array
              qaCookies.push(cookie.slice(6).slice(0, -5));
            }
          });

          settingsInputs.forEach(input => {
            qaCookies.forEach(cookie => {
              console.log('validating cookie')
              if (input.name == cookie) {
                input.checked = true;
              }
            });
          });

          updateSettings();
        }

        // cookie functions from https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
        function setCookie(name, value, days) {
          var expires = "";
          if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
          }
          document.cookie = name + "=" + (value || "") + expires + "; path=/";
        }

        function eraseCookie(name) {
          document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }

      }
    },
  };
})(Drupal);