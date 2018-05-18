$(function(){
	$(".container").hover(function(){
		$(this).animate({opacity: 0.3}, 3000)
	}, function(){
		$(this).animate({opacity: 1}, 3000)
	})
});