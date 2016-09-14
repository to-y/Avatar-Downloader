//gets data and calls module to download images

require('dotenv').config();
var downloadImages = require('./downloadImages.js');
var fs = require('fs');

//call module fs and request
const request = require('request');
const apiRoot = 'https://api.github.com';

//user and key from .env file
var username = process.env['user'];
var key = process.env['key'];

module.exports = {
  //put information gathered from user into function
  getRepoContributors : function(userRepo, userName, folder) {
    request.get({
      //request and get data from specified url, with information passed from user passed into function
      url: apiRoot + '/repos/' + userRepo + '/' + userName + '/contributors',
      headers: {
        //token of authorisation
        //does not matter who
        'User-Agent': username,
        'Authentication': key
      },
      //checks if it is a json
      //turns strings into object
      json: true
    }, function (err, incomingMessage, responseBody) {
      //checks for errors
      var status = incomingMessage.headers.status.split(' ')[0];
      if (status === 401) {
        console.log("User and Key in .env not valid!");
      }
      if (status === 404) {
        console.log("User or Repo not valid!");
      }
      if (err) {
        console.log(err);
        return;
      }
      responseBody.forEach(function (key) {
        var filename = './' + folder +'/' + key.id + ".jpg";
        console.log(filename);
        downloadImages.download(key.avatar_url, filename);
        // console.log(key.avatar_url);
      })
      // console.log(responseBody);
    })
    // console.log('Avatar', responseBody.avatar_url);
    // console.log(apiRoot + '/repos/' + userRepo + '/' + userName + '/contributors')
  }
}


//Notes
//----------------------------------------------------------------------------------------------------
// try {
//     fs.accessSync('.env', fs.F_OK);
//     // Do something
// } catch (err) {
//   console.log("Error",err);
//     // It isn't accessible
// }
//----------------------------------------------------------------------------------------------------
//curl -u to-y:aae174ad9dbf4096e8ed9c7bd0c3d2d5eb873cb8 --GET https://api.github.com/users/lighthouse-labs/repos
//https://api.github.com/repos/lighthouse-labs/laser_shark/contributors

