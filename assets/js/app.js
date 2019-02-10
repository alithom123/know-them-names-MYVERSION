// Our main javascript code.

const wikiApiUrl = "https://en.wikipedia.org/w/api.php";
var parameters = [];

parameters.push("action=query");
parameters.push("titles=Einstein");
parameters.push("prop=info");
parameters.push("format=jsonfm");

// action=query&titles=Albert%20Einstein&prop=info&format=jsonfm
let wikiApiUrlWithParameters = wikiApiUrl + "?" + parameters.join("&");

$(document).ready(function() {
  console.log("ready!");
  var albumName = encodeURIComponent("Songs of Leonard Cohen");

  // This one was from the wiki playground
  // Playground: https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&format=json&prop=extracts&generator=search&gsrsearch=You%20Want%20It%20Darker&gsrlimit=1

  $.getJSON(
    "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&gsrsearch=You%20Want%20It%20Darker&gsrlimit=1&origin=*",
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
