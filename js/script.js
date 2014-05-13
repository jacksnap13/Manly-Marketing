$(function(){
	
	$("#arrowOne").on("click", function(){
		var thisSection = $(this).parent(),
				nextSection = thisSection.next("section");
		nextSection.css("display", "block").animate({left: "0px"}, 500);
		$("#hunter").animate({right: "5%"}, 900);
		$("#quizcontainer1").delay(700).animate({top: "-2%"}, 700);
		$(".answer.one").delay(2500).animate({top: "200px"}, 600);
		$(".answer.two").delay(2900).animate({top: "275px"}, 600);
		$(".answer.three").delay(3200).animate({top: "350px"}, 700);
		$(".answer.four").delay(3500).animate({top: "425px"}, 800);
	});
	
	$(".quizcontainer p").on("mouseover", function(){
		$(this).find("span").css("background-color", "#d45a2a");
	});
	
	$(".quizcontainer p").on("mouseout", function(){
		$(this).find("span").css("background-color", "#5c5c5c");
	});
	
	$(".answer").on("click", function(){
		var answer = $(this).data("answer");
		$("#modalOne").fadeIn(500);
		if(answer == "right"){
			$(".dialogbox p").html("You is so smart");
		}
		else{$(".dialogbox p").html("You is so wrong");}
	});
	
	$("#arrowTwo").on("click", function(){
		var mother = $(this).parents("section"),
		nextMom = mother.next("section");
		nextMom.css("display", "block").animate({left: "0px"}, 500);
	});
	
});