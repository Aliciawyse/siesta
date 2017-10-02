//init map function has to be global
var map;

function initMap(lat, lng) {
    lat = lat || 33.7756178;
    lng = lng || -84.39628499999999;

    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: lng},
        zoom: 13
    });
}

//function to get lat and lng coordinates

function getGeoCode(userInput){

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
            initMap(lat,lng);
        })
}


$("#submit").on("click", function(){

    event.preventDefault();

    console.log($("#firstLocation").val());

    var userInput = $("#firstLocation").val().trim();

    getGeoCode(userInput);

});

