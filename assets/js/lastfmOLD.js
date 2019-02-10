// Our main javascript code.

const lastFmApiUrl = "https://last.fm";
var parameters = [];

/* 
LAST FM APPLICATION CREDENTIALS

Application name	Know Them Jams
API key	0772c14f0ba015c725c4b9e7d8f8e319
Shared secret	28099db5c2ff26665802eeae38560cc5
Registered to	ALITHOM123

*/

parameters.push("action=query");
parameters.push("titles=Einstein");
parameters.push("prop=info");
parameters.push("format=jsonfm");

// action=query&titles=Albert%20Einstein&prop=info&format=jsonfm
let lastFmApiUrlWithParameters = lastFmApiUrl + "?" + parameters.join("&");

$(document).ready(function() {
  console.log("ready!");

  var albumName = encodeURIComponent("Songs of Leonard Cohen");

  $.getJSON(
    "https://www.last.fm/api/auth/?api_key=0772c14f0ba015c725c4b9e7d8f8e319",
    function(data) {
      console.log(data);
    }
  );

  //   $.getJSON(
  //     "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=" +
  //       albumName +
  //       "&origin=*",
  //     function(data) {
  //       console.log(data);
  //     }
  //   );

  //   $.getJSON(
  //     "https://en.wikipedia.org/w/api.php?action=parse&page=einstein&format=json&origin=*",
  //     function(data) {
  //       console.log(data);
  //     }
  //   );

  //   $.getJSON(
  //     "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvlimit=1&rvprop=content&format=xml&titles=Leonard%20Cohen&origin=*",
  //     function(data) {
  //       console.log(data);
  //     }
  //   );

  //   $.getJSON(
  //     "https://en.wikipedia.org/w/api.php?action=query&generator=search&utf8=1&gsrsearch=Einstein&prop=info&exintro=1&exlimit=20&exchars=200&origin=*&format=json",
  //     function(data) {
  //       console.log(data);
  //       console.log(data.query.pages["736"].extract);
  //     }
  //   );

  //   $.getJSON(
  //     "https://en.wikipedia.org/w/api.php?action=query&generator=search&utf8=1&gsrsearch=Einstein&prop=extracts&exintro=1&exlimit=20&exchars=200&origin=*&format=json",
  //     function(data) {
  //       console.log(data);
  //       console.log(data.query.pages["736"].extract);
  //     }
  //   );

  //   query:
  //   pages:
  //   736:

  /*
  $.getJSON(
    "https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=Einstein",
    function(data) {
        console.log(data);
        

    }
  );
  */

  /*
  $.ajax({
    type: "GET",
    url: wikiApiUrlWithParameters
    // data: data,
    // success: success,
    // dataType: dataType
  });
  */

  //   $.getJSON(wikiApiUrlWithParameters, function(result) {
  //     console.log("Synonyms returned:");
  //     console.log(result);
  //     // populateSynonyms(result);
  //     return result;
  //   });
});
