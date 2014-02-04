$(function() {
  
    var wh = $(document).height();
    $('.baseline').css({
      height: wh
    });

  $('.grid-toggle').on('click', function(e) {
    $('.baseline').toggleClass('active');

    e.preventDefault();
  });

});