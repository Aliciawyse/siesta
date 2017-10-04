function searchTwitter(value, place) {
    //Query the Twitter API to pull realtime tweets and parameters for user value
    var queryURL =  "https://twitterpopularapi.herokuapp.com/api?q=" + value + "&count=60&result_type=recent"; 
    $.ajax({
            url:queryURL,
            method: "GET",
            dataType:'jsonp'
        }).done(function(response) {
            displayTweets(response, place); // passing response to display function so we can get all data from API
        });
};

/**
    // Display tweets to the DOM
    // Only displaying tweets that have a twitter link
   
*/
function displayTweets(response, place) {
	console.log("Testing: ", response);
        var data = response.statuses;
        for(var i = 0; i < data.length; i++){
            if(data[i].entities.urls[0] !== undefined){
                if(data[i].entities.urls[0].expanded_url.includes("twitter")){
                    var container = $("<div>");
                    var p = $("<p>");
                        p.html(data[i].text);
                    var tweeterInfo = $("<h3>");
                        tweeterInfo.html(data[i].user.screen_name);
                    var img = $("<i>");
                        img.attr({
                            "class":"fa fa-twitter fa-2x"
                        })  
                    container.append(tweeterInfo, p, img);  
                    $(place).append(container);
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
}

// Event handler for user clicking the Twitter button, to populate in 2 divs
$("#twitterbtn").on("click",function(event) {
	event.preventDefault();

	$(".thumbnail1").empty();
	$(".thumbnail2").empty();

	var firstValue = $("#firstLocation").val();
	var secondValue = $("#secondLocation").val();


	searchTwitter(firstValue, ".thumbnail1");
	searchTwitter(secondValue, ".thumbnail2");
})