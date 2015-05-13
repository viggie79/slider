 sliderInt=1;
 sliderNext=2;

$(document).ready(function(){
	$('#slider img#1').fadeIn(300);
	startSlider();
});
function startSlider(){
	//count variable = number of img inside slider .size is a jq function that counts elements
	count=$("#slider img").size();
	loop=setInterval(function(){
		if(sliderNext>count) {
			sliderNext=1;
			sliderInt=1;
		}
		$("#slider img").fadeOut(300);
		$("#slider img#"+sliderNext).fadeIn(300);
		sliderInt=sliderNext;
		sliderNext=sliderNext+1;
	},3000)
}

function prev() {
	newSlide=sliderInt-1;
	showSlide(newSlide);
}

function next() {
	newSlide=sliderInt+1;
	showSlide(newSlide);
}

function showSlide(id){
	if(id>count) {
			id=1;
		}
	else if (id<1) {
		id=count;
	}
		$("#slider img").fadeOut(300);
		$("#slider img#"+id).fadeIn(300);
		sliderInt=id;
		sliderNext=id+1;
}
