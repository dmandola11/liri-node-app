// grab the keys from the key.js file
var keys = require('./keys.js');

// get all the various keys form the file
var twitterKeys = keys.twitterKeys;
var spotifyKeys = keys.spotifyKeys;

// loop through the keys and print them (just to check if they're working, this wouldn't be secure otherwise)

for (var key in twitterKeys) {
	console.log("Twitter key: " + twitterKeys[key]);
};

for (var key in spotifyKeys) {
	console.log("Spotify key: " + spotifyKeys[key]);
};

// if (process.argv[2] == "my-tweets"){
	

// } else if()