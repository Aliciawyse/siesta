//init map function has to be global
//ES 6 Default parameters: if someone runs my function without lat, lng or loc - my code breaks. Javascript is a loosley typed language. You could
//get away with running these functions without params -- that's not a good thing.

function initMap(lat = 33.7756178, lng = -84.39628499999999, loc = "socialMedia", zoom = 8) {

//Before default parameters I had to test for the validity of my parameters, assuming that I even got them. 1) Does paramater exist 2) is the parameter type a number
    // lat = lat || 33.7756178;
    // lng = lng || -84.39628499999999;

    //USER VALIDATION

    //ternary operator
    lat = typeof lat === "number" ? lat : 33.7756178;

    //not using ternary operator
    if(typeof lng !== "number"){
        lng = -84.39628499999999;
    }



    // Constructor creates a new map - only center and zoom are required.
    var socialMedia = new google.maps.Map(document.getElementById(loc), {
        center: {lat: lat, lng: lng},
        zoom: zoom
    });

}


//function to get lat and lng coordinates
function getGeoCode(userInput = 'Atlanta', loc){

    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + userInput + "&key=AIzaSyDcZkO1ZtZBXFmOzs2H8el9HOwejgaYimg&v=3&callback=initMap";

    //Performing an AJAX GET request to our query URL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    // After the data from the AJAX request comes back
        .done(function (response) {

            //console.log(response.results[0].geometry.location);
            var lat = response.results[0].geometry.location.lat;
            var lng = response.results[0].geometry.location.lng;
            console.log("lat/lng", lat, lng);
            initMap(lat,lng, loc);

        })
}


$("#maps").on("click", function(){

    event.preventDefault();

    var userInput = $("#firstLocation").val().trim();
    var userInput2 = $("#secondLocation").val().trim();

    //if under inputs are undefined then specify an alert else do this code.

    $("#loc1").html(userInput);
    $("#loc2").html(userInput2);


    google.maps.event.trigger(socialMedia, 'resize');

    //getGeoCode(userInput);
    getGeoCode();
    getGeoCode(userInput2, 'socialMedia2');


});

