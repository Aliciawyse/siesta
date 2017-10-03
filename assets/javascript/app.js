function searchTwitter(firstLoc) {

    //Query the Twitter API to pull realtime tweets and parameters for geo and
    var queryURL = "https://twitterpopularapi.herokuapp.com/api?q=" + firstLoc + "&count=20";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: 'jsonp'
    }).done(function (response) {
        console.log(response);
    });
}

$(document).ready(function(){

    $("#submit").on("click", function(event){

    	//grab location values
		var firstLoc = $("#firstLocation").val().trim();
        var secondLoc = $("#secondLocation").val().trim();

        if(firstLoc || secondLoc === ""){

            $('#myModal').modal('show');

        } else {
            //display results
            $("#results").removeClass("locationResults");
        }

        //searchTwitter(firstLoc);
    });
});




