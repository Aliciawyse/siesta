//init map function has to be global
var map;
var map2;

function initMap(lat, lng) {
    lat = lat || 33.7756178;
    lng = lng || -84.39628499999999;


    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: lng},
        zoom: 13
    });

    map2 = new google.maps.Map(document.getElementById('map2'), {
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


$("#maps").on("click", function(){

    event.preventDefault();

    var userInput = $("#firstLocation").val().trim();
    var userInput2 = $("#secondLocation").val().trim();

    google.maps.event.trigger(map, 'resize');

    getGeoCode(userInput);
    getGeoCode(userInput2);


});

