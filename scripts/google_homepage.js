$(document).ready(function() {
	$("#bells img")
    .mouseover(function () {
        $(this).attr("src", "images/bell-click.png");
    })
    .mouseout(function () {
        $(this).attr("src", "images/bell.png");
    });
	
	$("#apps img")
    .mouseover(function () {
        $(this).attr("src", "images/apps-click.png");
    })
    .mouseout(function () {
        $(this).attr("src", "images/apps.png");
    });
});