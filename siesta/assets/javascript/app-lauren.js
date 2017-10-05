

//global variables
var IGClientID = "347a9d4c9907483aaad64a1773877d9d";
var URILand ="http://localhost:8000";
var hash1;
var hash2;

//storing values as local storage on clicking go so that user does now have to reinput these if the page has to redirect
$("#submit").on("click",function(){
    //localStorage.clear();

    hash1 = $("#firstLocation").val().trim();
    hash2 = $("#secondLocation").val().trim();

    localStorage.setItem("loc1", hash1);
    localStorage.setItem("loc2", hash2);
    $("#instaMedia").empty()
    $("#instaMedia2").empty()
 });

$("#firstLocation").val((localStorage.getItem("loc1")))
$("#secondLocation").val((localStorage.getItem("loc2")))

var myParam = location.hash.split("access_token=")[1]
//console.log(myParam)

//setting href to instagram login page
$("#instagrambut").attr("href","https://api.instagram.com/oauth/authorize/?client_id="+IGClientID+"&redirect_uri="+URILand+"&response_type=token&scope=public_content")

var myParam = location.hash.split("access_token=")[1]
//console.log(myParam)

if (myParam != null || myParam != undefined) {
    //Query the Instagram API to pull most recent tags per filter
    $("#instagrambut").on("click",function(e){
        e.preventDefault();


        var query = "https://api.instagram.com/v1/tags/"+hash1+"/media/recent?access_token="+myParam+"&count=10?"


        console.log(query);
        $.ajax({
            url:query,
            method: "GET",
            dataType:'jsonp'
        }).done(function(response) {
            console.log(response);

            for (var i =0; i<response.data.length;i++){

             var imgs1 = $("<img>").attr("src", response.data[i].images.standard_resolution.url)
             console.log("img source", imgs1)
             $("#instaMedia").append(imgs1)
            };
        });
      
        var query2 = "https://api.instagram.com/v1/tags/"+hash2+"/media/recent?access_token="+myParam+"&callback=?"


        console.log(query);
        $.ajax({
            url:query2,
            method: "GET",
            dataType:'jsonp'
        }).done(function(response) {
            //console.log(response);
             
             for (var i =0; i<response.data.length;i++){

            var imgs2 = $("<img>").attr("src", response.data[i].images.standard_resolution.url)
            $("#instaMedia2").append(imgs2)
            };
        });

    });
}
else {console.log("no param")
}


