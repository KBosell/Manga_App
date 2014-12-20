/*Main Page Image Rotation*/

$(document).ready(function () {
	console.log('im ready');
	setTimeout(fade,2000);

	function fade() {
		var lastIMG = $("#faded .slides img:last");
		lastIMG.animate({"opacity":"0"},1000, function() {
			lastIMG.prependTo("#faded .slides");
			lastIMG.css({"opacity":"1"});
			setTimeout(fade,2000);
		});
	}

});

/*Click Image Swap*/

var largeImage = $(".enlarged img");
var image1 = $(".gallery .img1");
var image2 = $(".gallery .img2");
var image3 = $(".gallery .img3");
var image4 = $(".gallery .img4");

function image_swap(whichImage) {
	// console.log(whichImage);
	var theNewLarge = whichImage.attr('data-large');

	function image_over() {
		// console.log("i am working!!!");
		largeImage.attr('src',theNewLarge);
	}
	
	whichImage.click(image_over);
}

image_swap(image1);
image_swap(image2);
image_swap(image3);
image_swap(image4);