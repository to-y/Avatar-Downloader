//make folder and check if folder name/path is valid before calling function to download

var fs = require('fs');
var getRepoAndDownload = require('./getUrl.js');

module.exports = {
  makeFolderAndDownload: function(user, name, folder) {
    if (folder) {
      fs.mkdir('./' + folder, function (err) {
        if (err) {
          console.log(err);
          switch (err.code) {
            case 'EEXIST':
              console.log('Folder already exists!');
              return;
            default:
              console.error('Encountered error:', err);
          }
        } else {
          console.log('Folder created!');
          console.log("Downloading Images...");
          getRepoAndDownload.getRepoContributors(user, name, folder);
          }
      });
    } else {
      console.log('Please enter folder name!');
    }
  }
}
