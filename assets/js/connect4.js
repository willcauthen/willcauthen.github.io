console.log("we're in good shape");
whoseTurn = "blue";
hash = [
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
		var point = this.id - 7;
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
	if (whoseTurn == "blue") {
		whoseTurn = "red";
	} else if (whoseTurn == "red") {
		whoseTurn = "blue";
	}
	console.log(whoseTurn + " turn");
}

function checkWinner() {
	for (var i = 0; i < hash.length; i++) {
		if (hash[i] !== null){
			if ( hash[i] == hash[i + 1] && hash[i] == hash[i + 2] && hash[i] == hash[i +3]) {
				celebrate(i);
			} else if (hash[i] == hash[i + 7] && hash[i] == hash[i + 14] && hash[i] == hash[i + 21]) {
				celebrate(i);
			} else if (hash[i] == hash[i + 6] && hash[i] == hash[i + 12] && hash[i] == hash[i + 18]) {
				celebrate(i);
			} else if (hash[i] == hash[i + 8] && hash[i] == hash[i + 16] && hash[i] == hash[i + 24]) {
				celebrate(i);
			} //there is an edge case here that needs to be addressed in the boundaries. i.e. between 6 and 7. numerically they congruous, but for the point of the game they need to be anticipated for
			
		}
	}
}
function celebrate(x) {
	alert(hash[x] + " IS A WINNER WINNER CHICKEN DINNER");
	console.log( hash[x] + " IS A WINNER WINNER CHICKEN DINNER");
}