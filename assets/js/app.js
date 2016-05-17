console.log("we're in good shape");
var whoseTurn = "X";
var winner = false;
var hash = [[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9]];

$(document).ready(function() {
	$("div div").click(function () {
		if (!winner) {
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
					var tile;
					if (whoseTurn == "X") {
						tile = "X" + id;
						tile = document.getElementById(tile);
						$(tile).css("z-index", 0);
						$(this).attr("id", null);
					} else if (whoseTurn == "O") {
						tile = "O" + id;
						tile = document.getElementById(tile);
						$(tile).css("z-index", 0);
						$(this).attr("id", null);
					}
					turn();
					checkWinner();
				}
			} else {
				alert("WE ALREADY HAVE A WINNER, FOOL");
			}
	});
	$('#reset').on('click', function () {
		console.log("clicked reset");
		window.location.reload(false);
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
		if (!winner) {	
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
					//diagonal left to right
					((hash[0][0] == hash[1][1]) && (hash[1][1] == hash[2][2])) || 
					// diagonal right to left
					((hash[0][2] == hash[1][1]) && (hash[1][1] == hash[2][0]))
		
				) {
				turn();
				alert(whoseTurn + " is the winner");
				winner = true;
			}
		}
}