(function($) {
	var aiMsg = ["Ryan Tarson is the coolest.", "Never stop being awesome!", "You will have a great day today!", "This is the best codepen you'll ever see.", "The sun shines for you.", "Welcome to my codepen :)", "enjoy.", "Please make it stop", "I like playing video games!", "I like tacos 8|", "Please send me some love...", "Go F%k yourself, thanks."];

	$(document).ready(function() {
		var inputAI = $("#reg_ai");
		
		aiMSGLoop(aiMsg);
		function aiMSGLoop(wordArray) {
			// store new element so AI knows where to write
			var newElement = $("<h1></h1>").appendTo(inputAI);
			var rand = Math.round(Math.random() * (wordArray.length-1)+ 0);
			//my type writer uses object function so no need to code 
			//long function every time
			newElement.writeText(wordArray[rand]).then(function() {
				setTimeout(function(){ 
					newElement
					.removeText(wordArray[rand])
					.then(function() {
					aiMSGLoop(wordArray);
						
				});
					 }, 2500);
			});
		}
	});
	//AI Text typer
	$.fn.writeText = function(content) {
		var elem = this;
		elem.addClass("typewriter");
		return new Promise(function(resolve, reject) {
			var contentArray = content.split(""),
				current = 0;
			var rand = 90;
			setInterval(function() {
				rand = Math.round(Math.random() * (300 + 1050));
				if (current < contentArray.length) {
					elem.text(elem.text() + contentArray[current++]);
				} else {
					resolve();
				}
			}, rand);
		});
	};
	//AI Text Typer backspace
	$.fn.removeText = function(content) {
		var elem = this;
		return new Promise(function(resolve, reject) {
			var contentArray = content.split("");
			var current = 0;
			setInterval(function() {
				if (current < contentArray.length) {
					elem.text(elem.text().slice(0, -1));
					current++;
				} else {
					elem.remove();
					resolve();
				}
			}, 70);
		});
	};
})(jQuery);