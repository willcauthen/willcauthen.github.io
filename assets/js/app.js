console.log("we're in good shape");
var whoseTurn = "X";
var hash = [[null, null, null],
			[null, null, null],
			[null, null, null]];

$(document).ready(function() {
	$("div div").click(function () {
		console.log(this);
		turn();
	});
});


function game() {

}

function turn() {
	if (whoseTurn == "O") {
		console.log("O's turn");
		whoseTurn = "X";
	} else if (whoseTurn == "X") {
		console.log("X's turn");
		whoseTurn = "O";
	} else {
		whoseTurn = "X";
	}
}