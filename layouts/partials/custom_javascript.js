//<!-- Create your own layouts/partials/custom_javascript.html to add javascript -->

var iweblog = {};
iweblog.application = function() {

	// @sumamary: format flickr results for display
	function _display_images(data, count) {
		var htmlString = "", cnt = 0;

		$.each(data.data, function(i,data){
			if (cnt == count) return;

			var image = data.images.m;
      var smallImage = image.thumbnail.url;
      var largeImage = image.standard_resolution.url;
			htmlString += "<a class=\"photo-item\" href=\"" + largeImage + "\">";
			htmlString += "<img src=\"" + smallImage + "\" />";
			htmlString += "</a>";
			cnt++;
		});

    $('#photos').html(htmlString);
		$('#photos').lightGallery();
	}

	return {
		displayImages: function(data, count) { _display_images(data, count); }
	}
}();

/*
$.ajax({
	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
 		console.log(data);
		for( x in data.data ){
			$('ul').append('<li><img src="'+data.data[x].images.standard_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
			// data.data[x].images.thumbnail.url - URL of image 150х150
			// data.data[x].images.standard_resolution.url - URL of image 612х612
			// data.data[x].link - Instagram post URL 
		}
	},
	error: function(data){
		console.log(data); // send the error notifications to console
	}
});
*/