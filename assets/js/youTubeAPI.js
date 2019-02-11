var maxResults = 5;

function tplawesome(e, t) {
    res = e;
    for (var n = 0; n < t.length; n++) {
        res = res.replace(/\{\{(.*?)\}\}/g, function (e, r) {
            return t[n][r]
        })
    }
    return res
}

$(function () {

    $(".searchButton").on("click", function () {
        query = $(".searchText").val();
        console.log("Search Txt = " + query);

        // prepare the request
        var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent(query).replace(/%20/g, "+"),
            maxResults: maxResults,
            order: "viewCount",
            // publishedAfter: "2015-01-01T00:00:00Z"
        });

        // execute the request
        request.execute(function (response) {
            console.log("Response from youtube api:");
            console.log(response);
            var results = response.result;
            $("#results").html("");
            $.each(results.items, function (index, item) {
                $.get("tpl/item.html", function (data) {
                    $("#results").append(tplawesome(data, [{
                        "title": item.snippet.title,
                        "videoid": item.id.videoId
                    }]));
                });
            });
            resetVideoHeight();
        });
    });

    $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9 / 16);
}

function init() {
    gapi.client.setApiKey("AIzaSyDBI7hI8JK4aZzVzoielp37nxJ9C28bSCQ");
    gapi.client.load("youtube", "v3", function () {
        // yt api is ready
    });
}