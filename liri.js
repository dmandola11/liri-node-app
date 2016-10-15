// grab the keys from the key.js file
var keys = require('./keys.js');
//use require to use npm packages
var Twitter = require('twitter');
var Spotify = require('spotify');
// putting the twitter keys in a variable to use in the tweets function
var client = new Twitter(keys.twitterKeys);
var fs = require('fs');
//var spotKeys = keys.spotifyKeys;

// console.log(keys.twitterKeys);

function twitter(){
	var params = {screen_name: 'damdola', count: 20, trim_user: true};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  	if (!error) {
  		for (var i = 0; i < tweets.length ; i++) {
           //console.log(tweets[i].text + ' : ' + tweets[i].created_at);
    console.log(tweets[i].created_at + " : " + tweets[i].text);
    console.log("=====================");
  }
  } else {
  	console.log(error);
  }
});
};


//function spotify(){ 
// spotify.search({ type: 'track', query: '' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
 
//     console.log(data) 
// });

//};


if (process.argv[2] == "my-tweets") {

	twitter();
 
};





