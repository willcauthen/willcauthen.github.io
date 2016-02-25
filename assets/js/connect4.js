console.log("we're in good shape");
whoseTurn = "BLUE";

hash = [
	null, null, null, null, null, null, null,
	null, null, null, null, null, null, null,
	null, null, null, null, null, null, null,
	null, null, null, null, null, null, null,
	null, null, null, null, null, null, null,
	null, null, null, null, null, null, null,
	null, null, null, null, null, null, null
	];
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
		var point = this.id - 10;
		console.log(this.id);
		if (hash[point] !==null || hash[point] === undefined){
			$(elem).css("background", whoseTurn);
			hash[this.id] = whoseTurn;
			$(this).val("true");
			checkWinner();
			turn();
		} else {
			console.log("that ain't a valid move, slick");			
		}
	}
	});
});


function turn() {
	if (whoseTurn == "BLUE") {
		whoseTurn = "RED";
	} else if (whoseTurn == "RED") {
		whoseTurn = "BLUE";
	}
	console.log(whoseTurn + "'s turn");
}

function checkWinner() {
	for (var i = 0; i < hash.length; i++) {
		if ( (hash[i] !== null) && (hash[i] !== undefined) ){
			if ( hash[i] == hash[i + 1] && hash[i] == hash[i + 2] && hash[i] == hash[i +3]) {
				celebrate(i);
			} else if (hash[i] == hash[i + 10] && hash[i] == hash[i + 20] && hash[i] == hash[i + 30]) {
				celebrate(i);
			} else if (hash[i] == hash[i + 11] && hash[i] == hash[i + 22] && hash[i] == hash[i + 33]) {
				celebrate(i);
			} else if (hash[i] == hash[i + 9] && hash[i] == hash[i + 18] && hash[i] == hash[i + 27]) {
				celebrate(i);
			} 
			
		}
	}
}
function celebrate(x) {
	// alert(hash[x] + " IS A WINNER WINNER CHICKEN DINNER");
	console.log( hash[x] + " IS A WINNER WINNER CHICKEN DINNER");
	$(".kudos").prepend(" " + whoseTurn + "'S A ");
	$("div#victory").css( "zIndex", 5);

}