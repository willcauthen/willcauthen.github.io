console.log("we're in good shape");

$(document).ready(function () {

	// selector, for UI
	$("div.col").on("mouseover", function() {
		console.log("hovering");
		$(this).css("background", "rgba(50, 0, 0, .3)");
	}).on("mouseleave", function () {
		$(this).css("background", "white");
	});
});