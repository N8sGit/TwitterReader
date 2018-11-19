const express = require('express');
const os = require('os');
const Twit = require('twit');
const passport = require('passport');
const TwitterTokenStrategy = require('passport-twitter-token');


const app = express();

app.use(express.static('dist'));


const authConfig = {
  consumerKey: 'MmkFJCacN0NoUl4DUkZKHFdQ4',
  consumerSecret: 'Ao546qA9JAMFyMkdUgvhluWkITLg2Eac0XOyuMJkQ8EHZfkwR9',
  accessToken: '2948033138-gfGz3ZoM2FWSjwnmELso8jLGlb4uCyPgrjvQopH',
  accessTokenSecret: 'jzYHyDXzDV9xDEdU5Nzusv1KYtCTvSb311Urw37ik5u8e'
};

const user = {
  id: 1, username: 'test', name: 'Justin Bieber', handle: '@justinbieber'
};


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


const Twitter = new Twit({
  consumerKey,
  consumerSecret,
  accessToken,
  accessTokenSecret,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
});

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
