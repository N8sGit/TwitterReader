const express = require('express');
const os = require('os');
const Twit = require('twit');
const passport = require('passport');
const TwitterTokenStrategy = require('passport-twitter-token');


const app = express();

app.use(express.static('dist'));


const authConfig = {
  consumer_key: '2NxkwQadYovC3FvxSaPpVyeGj',
  consumer_secret: 'PGSzU4DfiJuN4fb86gRZi7CxsOE1qElEutItuy3E1yG1GLh8BB',
  access_token: '2948033138-r4CzYPVtbNmf60FmELES82CBQPqJcLTfsCfvfe1',
  access_token_secret: 'R4UYCYbb0wBdkwI0Zz9TGROlWqS4cqh9NhPUyWmqmthbZ',
  timeout_ms: 60 * 1000
};

const user = {
  id: 1, username: 'test', name: 'Justin Bieber', handle: '@justinbieber'
};

const Twitter = new Twit(authConfig);


// passport.use(new TwitterTokenStrategy({
//   consumerKey,
//   consumerSecret,
//   includeEmail: false
// }),
// async (token, tokenSecret, profile, done) => {
//     console.log(token, tokenSecret, 'token plus secret' );
//     return done(null);
// });

// --request GET
//   --url 'https://api.twitter.com/1.1/users/search.json?q=soccer'
//   --header 'authorization: OAuth oauth_consumer_key="consumer-key-for-app",
//   oauth_nonce="generated-nonce", oauth_signature="generated-signature",
//   oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp",
//   oauth_token="access-token-for-authed-user", oauth_version="1.0"'



console.log(Twitter);

Twitter.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, (err, data, response) => {
  console.log(data);
});

app.get(`https://api.twitter.com/1.1/users/search.json?q=${user.name}`, (req, res) => {
  console.log(res);
//   - user name
// - user screen name (@whatever)
// - user profile image
// - tweet content
// - number of retweets
// - direct link to the tweet
});

// Twitter.get('search/tweets', {q: queryString, count: NoUpperBounds ? 100 : 1000}, function(err, data, response){
//     var tweets = data
//     if(!tweets.statuses) return res.json(["no tweets"])
//     var tweetData = tweets.statuses.map(function(value){
//       const sentimentScore = sentiment(value.text).score
//       return { id: value.id_str, text: value.text, happiness: sentimentScore}
//     }).filter(function(tweet){

//     res.json({
//         tweetData: tweetData,
//         percent: tweetData.length/tweets.statuses.length
//       })
//   })
// };


app.listen(8080, () => console.log('Listening on port 8080!'));
