$(function(){
	
	$("#arrowOne").on("click", function(){
		var thisSection = $(this).parent(),
				nextSection = thisSection.next("section");
		thisSection.animate({left: "-200%"}, 500);
		nextSection.css("display", "block").animate({left: "0px"}, 500);
		$("#hunter").delay(400).animate({right: "-1%"}, 900);
		$("#quizcontainer1").delay(700).animate({top: "-2%"}, 700);
		$(".answer.one").delay(1000).animate({top: "300px"}, 600);
		$(".answer.two").delay(1400).animate({top: "300px"}, 600);
		$(".answer.three").delay(1700).animate({top: "300px"}, 700);
		$(".answer.four").delay(1900).animate({top: "300px"}, 800);
	});
	
	$(".quizcontainer p").on("mouseover", function(){
		$(this).find("span").css("background-color", "#d45a2a");
	});
	
	$(".quizcontainer p").on("mouseout", function(){
		$(this).find("span").css("background-color", "#5c5c5c");
	});
	
	$("#quizcontainer1 .answer").on("click", function(){
		var answer = $(this).data("answer");
		$(".quizcontainer").animate({top: "-2000"}, 800);
		$("#hunter").delay(300).animate({top: "5000"}, 1200);
		$(".hotprod").delay(300).animate({top: "10%"}, 600);
		$(".heatmaxlogo").delay(400).animate({bottom: "30%"}, 600);
		$("#firstAnswer").delay(400).animate({top: "0"}, 600);
		$("#arrowTwo").delay(1200).fadeIn(900);
		if(answer == "right"){
			$(".correct.first").html("Correct! Good job.");
		}
		
	});
	
	$("#arrowTwo").on("click", function(){
		var mother = $(this).parents("section"),
		nextMom = mother.next("section");
		mother.animate({left: "-200%"},600);
		nextMom.show().animate({left: "0px"}, 500);
		$("#football").delay(400).animate({left: "490px"}, 900);
		$("#quizcontainer2").delay(700).animate({top: "-2%"}, 700);
		$(".answer.five").delay(1000).animate({top: "300px"}, 600);
		$(".answer.six").delay(1400).animate({top: "300px"}, 600);
		$(".answer.seven").delay(1700).animate({top: "300px"}, 700);
		$(".answer.eight").delay(1900).animate({top: "300px"}, 800);

	});
	
		$("#quizcontainer2 .answer").on("click", function(){
		var answer = $(this).data("answer");
		$(".quizcontainer").animate({top: "-2000"}, 800);
		$("#football").delay(300).animate({top: "5000"}, 1200);
		$(".rogers").delay(300).animate({top: "2%"}, 600);
		$("#secondAnswer").delay(400).animate({top: "0"}, 600);
		$("#arrowThree").delay(1200).fadeIn(900);
		if(answer == "right"){
			$(".correct.first").html("Correct! Good job.");
		}
		
	});
	
	
	
	
});