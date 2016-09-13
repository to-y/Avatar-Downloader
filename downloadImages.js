//download module called by download_avatars.js

const request = require('request');
const fs = require('fs');


module.exports = {

    download: function(url, filePath) {
    //.get url from key.avatar_url, .on(if there is an error, it runs function to print error message)
      request.get(url).on('error', function(err) {
        console.log(err);
      })

    //if not, it saves the file onto specified path and filename.
    //request.get gets the URL and images from the internet
    //=> .pipe creates a path from the images to your hard drive
    //=> then you can use fs to decide to read write update delete or whatever with the file
    .pipe(fs.createWriteStream(filePath))
    }
}