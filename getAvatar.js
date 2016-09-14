//gets user input, checks validity and calls function to create folder and download images

//importing module
require('dotenv').config();
var mkdir = require('./makeFolder.js')

//get input from user
var input = process.argv;
var user = process.argv[2];
var name = process.argv[3];
var folder = process.argv[4];

console.log("Getting URL...")
console.log("Creating folder...");

if (!user || !name) {
  throw new Error('Please enter a User and Repo name!');
}

if (input.length > 5) {
  throw new Error('Too many arguments!');
}

mkdir.makeFolderAndDownload(user, name, folder);







//Notes
//---------------------------------------------------------------------------------------------------
//try (the function) and run it if it catches whatever specified/anything wrong
// try {
// } catch (error) {
// console.log("Something went wrong");
// }
