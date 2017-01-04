$(document).ready(function(){

porn.play();
porn.addEventListener('ended', function() {
   		this.currentTime = 0;
    	this.play();
		}, false);

function pornfadeout(){
	$("#screen1").animate({opacity: '0'});
}

function screenswap(){
	$("#screen1").css("display","none");
	$("#surveyscreen").css("display","block");
	$("body").css("background-image","url(assets/images/undressing.gif");
}

function survey(){
	$("#surveyscreen").animate({opacity: '1'});
}

function transition(){
	pornfadeout();
	setTimeout(screenswap,300);
	setTimeout(survey,300);
}

$("#porn").bind("timeupdate", function() {
    	var currentTime = parseInt(this.currentTime, 10);
    	if(currentTime == 13) { 
        	transition();
        	$(this).unbind("timeupdate");
    	};
	});

function buttonblack(){
	$("#submit").css("background-color","black");
}

function buttonred(){
	$("#submit").css("background-color","red");
}

function buttonflash(){
	setTimeout(buttonblack,300);
	setTimeout(buttonred,600);
	setTimeout(buttonflash,600);
}

function fartsound(){
	porn.pause();
	fart.play();
	fart.addEventListener('ended', function() {
   		porn.play();
    	$("#surveyscreen").css("display","block");
		$("#screen3").css("display","none");
		$("body").css("background-image","url(assets/images/undressing.gif");
		}, false);
}

function twerk(){
	$("#surveyscreen").css("display","none");
	$("#screen3").css("display","block");
	$("body").css("background-image","url(assets/images/background.gif");
	setTimeout(fartsound,2000);
}

function org1(){
	orgasm1.play();
}

function org2(){
	orgasm2.play();
}

function orgasms(){
	org2();
	setTimeout(org1,30000);
	setTimeout(twerk,60000);
	setTimeout(orgasms,90000);
}

setTimeout(orgasms,5000);

$("#header").on("click",function(){
	twerk();
});

function modalwhite(){
	$("#closebutton").css("background-color","black");
	$("#matchImg").css("border-color","white");
	$("#matchName").css("color","white");
}

function modalred(){
	$("#closebutton").css("background-color","red");
	$("#matchImg").css("border-color","red");
	$("#matchName").css("color","red");
}

function modalflash(){
	setTimeout(modalwhite,300);
	setTimeout(modalred,600);
	setTimeout(modalflash,600);
}

modalflash();
buttonflash();

});





