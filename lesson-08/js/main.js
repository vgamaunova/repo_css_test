 $(function() {
 	$('select').selectmenu();
});
 $(document).ready(function(){

 		// console.log($('.tabs_control-link'));
 	$('.tabs_control-link').on('click', function(e){
 		e.preventDefault();

 		var item = $(this).closest('.tabs_controls-item'),
 			contentItem = $('.tabs_item'),
 			itemPosition = item.index();
 		contentItem.eq(itemPosition)
 			.add(item)
 			.addClass('active')
 			.siblings()
 			.removeClass('active');

 	});
 });