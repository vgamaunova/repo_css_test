$(document).ready(function(){
	$('.accordeon_trigger').on('click',function(e){
		accordeonInit(e,this);
	});

	$('.content-accordeon a').on('click',function(e){
		accordeonInit(e,this);
	});

	$("#owl-demo").owlCarousel({
  		items:1,
    });

	function accordeonInit(e, link)
	{
		e.preventDefault();
        var item = $(link).closest('li'),
        list = $(link).closest('ul'),
        items = list.children('li'),
        content = item.find('ul'),
        otherContent = list.find('ul'),
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

	}
});
