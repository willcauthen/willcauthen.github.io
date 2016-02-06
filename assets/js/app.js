console.log("we're in good shape");
var whoseTurn = "X";
var hash = [[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9]];

$(document).ready(function() {
	$("div div").click(function () {
		if (this.id){
			switch (this.id) {
				case "a1":
				hash[0][0] = whoseTurn;
				break;
				case "a2":
				hash[0][1] = whoseTurn;
				break;
				case "a3":
				hash[0][2] = whoseTurn;
				break;
				case "b1":
				hash[1][0] = whoseTurn;
				break;
				case "b2":
				hash[1][1] = whoseTurn;
				break;
				case "b3":
				hash[1][2] = whoseTurn;
				break;
				case "c1":
				hash[2][0] = whoseTurn;
				break;
				case "c2":
				hash[2][1] = whoseTurn;
				break;
				case "c3":
				hash[2][2] = whoseTurn;
				break;
			}
			var id = this.id;
			if (whoseTurn == "X") {
				var tile = "X" + id;
				tile = document.getElementById(tile);
				$(tile).css("z-index", 0);
				$(this).attr("id", null);
			} else if (whoseTurn == "O") {
				var tile = "O" + id;
				tile = document.getElementById(tile);
				$(tile).css("z-index", 0);
				$(this).attr("id", null);
			}
			turn();
			checkWinner();
		}
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
function checkWinner() {
	if 	(
			//first row
			((hash[0][0] == hash[0][1]) && (hash[0][1] == hash[0][2])) || 
			//second row
			((hash[1][0] == hash[1][1]) && (hash[1][1] == hash[1][2])) || 
			//third row
			((hash[2][0] == hash[2][1]) && (hash[2][1] == hash[2][2])) || 
			// first column
			((hash[0][0] == hash[1][0]) && (hash[1][0] == hash[2][0])) || 
			// second column
			((hash[0][1] == hash[1][1]) && (hash[1][1] == hash[2][1])) || 
			// third column
			((hash[0][2] == hash[1][2]) && (hash[1][2] == hash[2][2])) ||
			//backslash
			((hash[0][0] == hash[1][1]) && (hash[1][1] == hash[2][2])) || 
			//forward slash
			((hash[0][2] == hash[1][1]) && (hash[1][1] == hash[2][0]))

		) {
		turn();
		alert(whoseTurn + " is the winner");
	}
}