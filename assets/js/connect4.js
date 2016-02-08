console.log("we're in good shape");
whoseTurn = "blue";
$(document).ready(function () {

	// selector, for UI
	$("div.col").on("mouseover", function() {
		var elem = document.getElementById(this.id);
		if (!this.value) {
			$(elem).css("background", "rgba(50, 0, 0, .3)");
		}
	}).on("mouseleave", function () {
		if (!this.value){
			var elem = document.getElementById(this.id);
			$(elem).css("background", "white");
		}
	});
			
	//click logic
	$("div.col").on("click", function () {
		var elem = document.getElementById(this.id);
		if (this.value) {
		console.log("that ain't a valid move, slick");

	} else if (!this.value) {
		console.log(elem);
		console.log(this.id + " WAS CLICKIFIED");
		$(elem).css("background", whoseTurn);
		$(this).val("true");
		turn();
	}
	});
});


function turn() {
	if (whoseTurn == "blue") {
		whoseTurn = "red";
	} else if (whoseTurn == "red") {
		whoseTurn = "blue";
	}
	console.log(whoseTurn + " turn");
}