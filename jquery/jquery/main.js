$(document).ready(function(){
	$('.accordeon_trigger').on('click',function(e){
		e.preventDefault();

		var $this = $(this),
			item = $this.closest('.accordeon_item'),
			list = $this.closest('.accordeon_list'),
			items = list.find('.accordeon_item'),
			content = item.find('.accordeon_inner'),
			otherContent = list.find('.accordeon_inner'),
			duration = 300;
		if (!item.hasClass('active')) {
			items.removeClass('active');
			item.addClass('active');
			otherContent.stop(true, true).slideUp(duration);
			content.slideDown(duration);
		}else{
			content.slideUp(duration);
			item.removeClass('active');
		}

	});
// Слайдшоу

	$('.slideshow_pic').on('click', function(e){
		e.preventDefault();

		var
			$this = $(this),
			item = $this.closest('.slideshow_item'),
			container = $this.closest('.slideshow'),
			display = container.find('.slideshow_display'),
			path = item.find('img').attr('src'),
			duration = 300;
		if (!item.hasClass('active')) {
			item.addClass('active').siblings().removeClass('active');

			display.find('img').fadeOut(duration, function(){
				$(this).attr('src', path).fadeIn(duration)
		});
		}

	});

});