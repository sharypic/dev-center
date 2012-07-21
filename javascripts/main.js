$(document).ready(function() {
  $('.see-response').click(function(e) {
    var $parent = $(this).parents('.service');
    $(".sample-response", $parent).collapse('toggle');
    $('.see-response i', $parent).toggleClass('icon-chevron-up');
    $('.see-response i', $parent).toggleClass('icon-chevron-down');
  });
});
