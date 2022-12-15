/**
 * @file
 */

(function ($, Drupal, drupalSettings) {

  Drupal.behaviors.hierarhical_tax_tree = {
    attach: function (context, settings) {
      once('hierarhical_tax_tree', '.helfi_ahjo--expanded', context).forEach(function (i, obj) {
        let self = $(this);

        if (self.find('a.active').length) {
          self.addClass('active');

          if (drupalSettings.interactiveParentMenu) {
            if (!self.hasClass('active')) {
              self.children('i').toggleClass('arrow-right arrow-down');
            }
          }
        }
      });

      $('.hierarchical-taxonomy-tree .helfi_ahjo--expanded > a').on('click', function (e) {
        e.preventDefault();
        $(this).find('i').toggleClass('arrow-right arrow-down');
        let isChildVisible = $(this).parent().children('.ahjo-tree').is(':visible');
        if (isChildVisible) {
          $(this).parent().children('.ahjo-tree').slideUp();
          $(this).parent().removeClass('active');
        }
        else {
          $(this).parent().children('.ahjo-tree').slideDown();
          $(this).parent().addClass('active');
        }
      });

    }
  };

})(jQuery, Drupal, drupalSettings);
