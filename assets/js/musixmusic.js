var artist;
$(document).ready(function () {
    console.log("ready!");

    $(".searchButton").on("click", function () {
        artist = $(".searchText").val();
        console.log(artist);

        // var key = "8d500052733636b90bdda68c9ce64e78";
        // var title = "fantasy";
        var queryURL = "https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=callback&q_artist=" + artist + "&page_size=1&apikey=8d500052733636b90bdda68c9ce64e78";



        $.ajax({
            datatype: "json",
            url: queryURL,
            success: console.log("WORKING")
        }).then(function (response) {
            console.log(response);
            var artistInfo = $("<div class ='card-info'>").text(response);
            $(".card-header").append(artistInfo);
        });
    });
    // $.getJSON({
    //     url: queryURL,
    //     method:"GET"
    // }).then(function(response){
    //     console.log(response);  
    // })

    // $.getJSON(queryURL, function(response) {
    //     console.log(response);
    // });


});