// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {

var grid_width = $("input[name=width]").val();
var grid_height = $("input[name=height]").val();
$("table").remove();
$(".design").append("<table> </table>");
for (var i = 0; i < grid_height; i++) {
	$("table").append("<tr> </tr>");
		for (var x = 0; x < grid_width; x++) {
			$("table").append("<td> </td>");
		}
	}
}

$("form").submit(function() {
	event.preventDefault();
	makeGrid();
});

$("body").on("mousedown", "td", function() {
	$("body").on("mouseover", "td", function() {
		$(this).css("background-color", $("input[type=color]").val());
	});
});