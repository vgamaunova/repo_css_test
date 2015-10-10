$(document).ready(function(){

	$("#owl-demo").owlCarousel({
  		items:1,
  		 navigationText:[" ", " "],
    navigation: true,
    responsive:false,
    });
    $('.main-button__img').on('click',function(){
    	$('.nav-main').toggleClass('open');
    })
	$('.form-thumb__title').on('click',function(e){
		e.preventDefault();

		var $this = $(this),
			item = $this.closest('.form-thumb'),
			list = $this.closest('.form-box'),
			items = list.find('.form-thumb'),
			content = item.find('.form-thumb__wrapper'),
			otherContent = list.find('.form-thumb__wrapper'),
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
});
