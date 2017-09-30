function searchTwitter() {

	//Query the Twitter API to pull realtime tweets and parameters for geo and 
	var queryURL = 	"https://twitterpopularapi.herokuapp.com/api?q=" + "Donald" + "&count=20"; 
	console.log(queryURL);
	$.ajax({
		url:queryURL,
		method: "GET",
		dataType:'jsonp'
	}).done(function(response) {

		console.log(response);


	});


	// pmZqgkhgucsEdXkbqPYnnRpZs
};

searchTwitter();
// https://api.twitter.com/1.1/search/tweets.json?q=" + "" + "&result_type=recent&api_key=pmZqgkhgucsEdXkbqPYnnRpZs