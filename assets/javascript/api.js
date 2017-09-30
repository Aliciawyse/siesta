var container = $("<div>");
					// var p = $("<p>");
					// 	// p.html(data[i].text);

					// var tweeterInfo = $("<p>");
						// tweeterInfo.html(data[i].user.screen_name);

					var icon = $("<i>");
						icon.addClass("fa fa-twitter fa-2x")	

					console.log(icon)	

					//container.append(icon); 	

								
					
					$("#tweets").append(icon);

function saveToLocalStorage(data) {
	// body...
	var store = localStorage.setItem('tweets', JSON.stringify(data));

	return store;
}

function getTweetsStorage(data) {
	// body...
	var store = JSON.parse(localStorage.getItem('tweets'));

	return store;
}

function searchTwitter() {
// Empty already displayed tweets	
// $("#tweets").empty();
	//Query the Twitter API to pull realtime tweets and parameters for geo and 
	var queryURL = 	"https://twitterpopularapi.herokuapp.com/api?q=" + "island" + "&count=60&result_type=recent"; 
	console.log(queryURL);


	if(!getTweetsStorage()){
		$.ajax({
		url:queryURL,
		method: "GET",
		dataType:'jsonp'
	}).done(function(response) {
		
		getTweetsStorage(response);

		var data = response.statuses;


		for(var i = 0; i < data.length; i++){
			//console.log(data[i].user.entities.url);
			//console.log(data[i].user.entities.url)
			//console.log(data[i].entities.urls[0]);

			if(data[i].entities.urls[0] !== undefined){

				if(data[i].entities.urls[0].expanded_url.includes("twitter")){
					var container = $("<div>");
					var p = $("<p>");
						p.html(data[i].text);

					var tweeterInfo = $("<p>");
						tweeterInfo.html(data[i].user.screen_name);

					var img = $("<i>");
						img.attr({
							"class":"fa fa-twitter fa-2x"
						})	




					container.append(p, tweeterInfo, img); 	

								
					
					$("#tweets").append(container);
					console.log(data[i]);
					console.log(data[i].entities.urls[0].expanded_url);
				} else{
					// console.log("We have link, but we are not Twitter Link")
				}
			}

			else{
				// console.log("Don't have a link");
			}

			
		}


	});

	}

	// pmZqgkhgucsEdXkbqPYnnRpZs
};

//searchTwitter();
// Populate new tweets every 8 seconds.
// setInterval(function (argument) {
// 	searchTwitter();
// }, 8000)
// https://api.twitter.com/1.1/search/tweets.json?q=" + "" + "&result_type=recent&api_key=pmZqgkhgucsEdXkbqPYnnRpZs