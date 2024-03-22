// WIP: Need to confirm this code isn't necessary with recent content model changes
jQuery(document).ready(function ($) {
  $('.removeDiv').on('click', function() {
    var $input = $(this).closest('fieldset').find('input').val('');
    var $select = $(this).closest('fieldset').find('select').val('');
    var $textarea = $(this).closest('fieldset').find('textarea').val('');
    var $radio = $(this).closest('fieldset').find('[type=radio]').prop('checked', false);
  });
});
