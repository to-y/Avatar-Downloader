var request = require("request");

request("http://www.example.com", function (err, response, body) {
  if (err) {
    throw err;
  }

  // console.log(response.body);
  console.log(response);
  // console.log(body);

})
