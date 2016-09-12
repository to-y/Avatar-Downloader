var http = require("http");
var printExampleHTML = {

  host: "example.com",
  path: "/"

}

http.get(printExampleHTML, (response) => {

  response.setEncoding("utf8");

  response.on("data", function(data) {
    console.log(data);
  })
  response.on("end", function() {
    console.log("Response Stream Complete");
  });

});



