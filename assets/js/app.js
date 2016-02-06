console.log("we're in good shape");
var whoseTurn = "X";
var hash = [[null, null, null],
			[null, null, null],
			[null, null, null]];

$(document).ready(function() {
	$("div div").click(function () {
		console.log(this);
		if (whoseTurn == "X") {
			var id = this.id;
			elem = document.getElementById(id);
			$("img.X").css("z-index", 0);
			// console.log(elem);
		}
		turn();
	});
});

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