$('.day-block').click(function() {
	$('.day-block').removeClass('active-day');
	$(this).toggleClass('active-day');
});

$('.send').click(function() {
      $('.success').addClass('active');
      setTimeout(function() {
            $('.success').removeClass('active').fadeOut();
      }, 7000);
      return false;
});