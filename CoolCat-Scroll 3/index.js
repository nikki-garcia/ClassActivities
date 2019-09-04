//PURE JAVASCRIPT
function burger() {
    //setup variables to target IDs on the page
    var burger = document.getElementById('burger');
    var links = document.getElementById('links');
    var quit = document.getElementById('quit');
    //add styling so page changes when burger function is clicked
    burger.style.padding = "16px 16px 200vw 200vw";
    links.style.display = 'flex';
    links.classList.add("fade-in");
    quit.style.display = 'inline';
}

function quit(){
    //setup variables to target IDs on the page
    var burger = document.getElementById('burger');
    var links = document.getElementById('links');
    var quit = document.getElementById('quit');
    //add styling so page changes when burger function is clicked
    burger.style.padding = "16px 16px 32px 32px";
    links.style.display = 'none';
    quit.style.display = 'none';
}

//JQUERY
// for the touchmove function: https://www.w3schools.com/jsref/event_touchmove.asp
// for the scroll function: https://www.w3schools.com/jsref/event_onscroll.asp
$(document).on("scroll touchmove", function() {
		if ($(document).scrollTop() >= $("#one").position().top) {
				$('body').css('background', $("#one").attr("data-color"));
		};
		if ($(document).scrollTop() > $("#two").position().top) {
				$('body').css('background', $("#two").attr("data-color"))
		};
		if ($(document).scrollTop() > $("#three").position().top) {
				$('body').css('background', $("#three").attr("data-color"))
		};
		if ($(document).scrollTop() > $("#four").position().top) {
                $('body').css('background', $("#four").attr("data-color"))
                $('body').css('color', 'black')
		};

});