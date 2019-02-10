var artist;

$(document).ready(function () {
    console.log("ready!");

    $(".searchButton").on("click", function () {
        artist = $(".searchText").val();
        console.log(artist);
        // $(".searchText").val(" ");

        // var key = "2f736a46911731f07642e59e4f88026c";

        var queryURL = "https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + artist + "&limit=5&api_key=2f736a46911731f07642e59e4f88026c&format=json";



        $.ajax({
            datatype: "json",
            url: queryURL,
            success: console.log("WORKING")
        }).then(function (response) {
            console.log(response);
            var trackInfo = [
                artist,
                "1. " + response.toptracks.track[0].name,
                "2. " + response.toptracks.track[1].name,
                "3. " + response.toptracks.track[2].name,
                "4. " + response.toptracks.track[3].name,
                "5. " + response.toptracks.track[4].name
            ];



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