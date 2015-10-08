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
});
