$(function(){
	var liWidth = $("#galeria ul li").outerWidth(),
	speed = 1000,
	rotate = setInterval(autor, speed);




	//Mostrar botões
	$("section#galeria").hover(function(){
		$("section#buttons").fadeIn();
		clearInterval(rotate);
	}, function(){
		$("section#buttons").fadeOut();
		rotate = setInterval(autor, speed);

	});

	//Next
	$(".prox").click(function(e){
		e.preventDefault();

		$("section#galeria ul").css({'width':'99999%'}).animate({left:-liWidth}, function(){
		 $("#galeria ul li").last().after($("#galeria ul li").first());
		 $("#galeria ul i").last().css({'left':'0'});
		 $(this).css({'left':'0', 'width':'auto'});
		});

	});

	//Prev
	$(".ant").click(function(e){
		e.preventDefault();
		$("#galeria ul li").first().before($("#galeria ul li").last().css({'margin-left':-liWidth}));
		$("section#galeria ul").css({'width':'99999%'}).animate({left:liWidth}, function(){
			$("#galeria ul li").first().css({'margin-left':'0'});
			$(this).css({'left':'0', 'width':'auto'});
		});

	});

	function autor(){
	$(".next").click();
}

});