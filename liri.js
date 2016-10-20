// grab the keys from the key.js file
var keys = require('./keys.js');
//use require to use npm packages
var Twitter = require('twitter');
var Spotify = require('spotify');
var request = require('request');

// putting the twitter keys in a variable to use in the tweets function
var client = new Twitter(keys.twitterKeys);
var fs = require('fs');
//var spotKeys = keys.spotifyKeys;

// console.log(keys.twitterKeys);

function twitter() {
    var params = { screen_name: 'damdola', count: 20, trim_user: true };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
        	// runs through the object to grab only the info I need(date & tweet)
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].created_at + "\n" + tweets[i].text);
                console.log("_____________________________");
            }
        } else {
            console.log(error);
        }
    });
};

function spotifySong(song){
  var song;
    if (process.argv[3] === undefined){
      song = "The Sign"; 
      } else {
        song = process.argv[3];
      };
      //console.log(song);

      Spotify.search({ type: 'track', query: song}, function(error, data) {
        
        // tried only grabbing info i needed but it keeps displaying the same info over and over
        for (var i =0; i < data.tracks.items.length; i++){
          console.log(data.tracks.items[0].artists[0].name);
          console.log(data.tracks.items[0].name);
          console.log(data.tracks.items[0].preview_url);
          console.log(data.tracks.items[0].album.name);
        };
      });
};

function movie(){

	var movieTitle;

	if (process.argv[3] == undefined){
		movieTitle = "Mr. Nobody";
	} else {

		movieTitle = process.argv[3];
	};

	request('http://www.omdbapi.com/?t='+ movieTitle + '&y=&plot=short&r=json&tomatoes=true', function (error, response, body) {
    
	
	if (!error && response.statusCode == 200) {
		
		// Parse the body of the site and recover just the imdbRating
		// (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it). 
		console.log( "The movie title: " + JSON.parse(body)["Title"] +
			"\nThe movie release year: " + JSON.parse(body)["Year"] +
			"\nThe movie imdb rating: " +JSON.parse(body)["imdbRating"] +
			"\nThe movie Country of origin: " +JSON.parse(body)["Country"] +
			"\nThe movie language: " +JSON.parse(body)["Language"] +
			"\nThe movie plot: " +JSON.parse(body)["Plot"] +
			"\nThe movie actors: " +JSON.parse(body)["Actors"] +
			"\nThe movie Rotten Tomatoes score: " +JSON.parse(body)["tomatoMeter"] +
			"\nThe movie Rotten Tomatoes url: " +JSON.parse(body)["tomatoURL"]);
		}
	});
};

function doWhat(){
	fs.readFile('random.txt', "utf8", function(error, data){
		console.log(data);

    textArray = data.split(',');
	//trying to run the 1st index into the spotifysong function but not working. it's pulling the array
	// info as shown when i console log the data but won't put it through the function
    spotifySong(textArray[1]);
})
};

// if statment to run all the functions based on what process.argv[2] says
if (process.argv[2] == "my-tweets") {

    twitter();

} else if (process.argv[2] == "spotify-this-song") {

	spotifySong();
} else if (process.argv[2] == "movie-this"){

	movie();
} else if (process.argv[2] == "do-what-it-says"){

	doWhat();
};
