require('dotenv').config();

//importing modules
// var downloadImages = require('./downloadImages.js');
// var getRepo = require('./getUrl.js');

var mkdir = require('./makeFolder.js')

//call module fs and request
const request = require('request');
const apiRoot = 'https://api.github.com';

//variables to get input from user
var input = process.argv;
var user = process.argv[2];
var name = process.argv[3];
var folder = process.argv[4];

//user and key from .env file
var username = process.env['user'];
var key = process.env['key'];

console.log("Getting URL...")
console.log("Creating folder...");

if (!user || !name) {
    console.log('Please enter a User and Repo name!');
  } else if (input.length > 5) {
    throw 'Error: Too many arguments!';
    } else mkdir.makeFolder(user, name, folder);
