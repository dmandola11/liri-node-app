// grab the keys from the key.js file
var keys = require('./keys.js');
//use require to use npm packages
var Twitter = require('twitter');
var Spotify = require('spotify');
// putting the twitter keys in a variable to use in the tweets function
var client = new Twitter(keys.twitterKeys);
var fs = require('fs');
//var spotKeys = keys.spotifyKeys;

console.log(keys.twitterKeys);

function twitter(){
	var params = {screen_name: 'damdola'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  	if (!error) {
    console.log(tweets);
  }
});
};


// if (process.argv[2] == "my-tweets") {

 
// };




// } else if()
