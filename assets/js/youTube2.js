var artist;

$(document).ready(function () {
    console.log("ready!");

    $(".searchButton").on("click", function () {
        artist = $(".searchText").val();
        console.log(artist);
        // $(".searchText").val(" ");

        // var key = "2f736a46911731f07642e59e4f88026c";

        var queryURL = "https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?part=snippet&maxResults=3&order=viewCount&type=video&_h=6&" + artist + "&limit=5&api_key=AIzaSyDBI7hI8JK4aZzVzoielp37nxJ9C28bSCQ&format=json";



        $.ajax({
            datatype: "json",
            url: queryURL,
            success: console.log("WORKING")
        }).then(function (response) {
            console.log(response);
    

            for (let i = 0; i < trackInfo.length; i++) {
                var trackItems = $("<li>").append(trackInfo[i]);
                $(".trackList").append(trackItems);
                // listItem = [$("<li class ='listItems'>")];
                // // artistInfo.push(listItem);
                // listItem.push(trackInfo[i]);
                console.log(trackInfo[i]);
            }
            $(".searchButton").on("click", function () {
                $(".trackList").text(" ");

            });

        });
    });
});