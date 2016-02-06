console.log("we're in good shape");
var whoseTurn = "X";
var hash = [[null, null, null],
			[null, null, null],
			[null, null, null]];

$(document).ready(function() {
	$("div div").click(function () {
		var id = this.id;
		if (whoseTurn == "X") {
			var tile = "X" + id;
			tile = document.getElementById(tile);
			$(tile).css("z-index", 0);
		} else if (whoseTurn == "O") {
			var tile = "O" + id;
			tile = document.getElementById(tile);
			$(tile).css("z-index", 0);
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