$(document).ready(function() {

  $('.sample-url a.copy-paste').zclip({
    path: '/dev-center/javascripts/ZeroClipboard.swf',
    copy: function() {
      return $(this).text();
    }
  });

  $('.highlight pre').zclip({
    path: '/dev-center/javascripts/ZeroClipboard.swf',
    copy: function() {
      return $(this).text();
    }
  });

  $('.see-response').click(function(e) {
    var $parent = $(this).parents('.service');
    $(".sample-response", $parent).collapse('toggle');
    $('.see-response i', $parent).toggleClass('icon-chevron-up');
    $('.see-response i', $parent).toggleClass('icon-chevron-down');
  });

});
