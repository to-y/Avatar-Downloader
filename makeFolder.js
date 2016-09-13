var fs = require('fs');
var getRepo = require('./getUrl.js');

module.exports = {

makeFolder: function(user, name, folder) {
  if (folder) {
    fs.mkdir('./' + folder, function (err) {
        if (err) {
          switch (err.code) {
            case 'EEXIST':
              console.log('Folder already exists!');
              break;
            default:
              console.error('Encountered error:', err);
          }
        } else {
          console.log('Folder created!');
          console.log("Downloading Images...");
          getRepo.getRepoContributors(user, name, folder);
        }
    });
  } else console.log('Please enter folder name!');
}
}
