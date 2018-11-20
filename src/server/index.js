const express = require('express');
const os = require('os');
const Twit = require('twit');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');
et axiosDefaults = require('axios/lib/defaults');
axiosDefaults.baseURL = '';


const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json({ type: '*/*' })); // Parses incoming requests as JSON
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.get('/bundle.js', function (req, res) {
  console.log('bundle server hit');
  res.sendFile(path.resolve(__dirname, './public/bundle.js'));
});

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


app.use(function (req, res, next) {
  console.dir(req.path, '\n all paths');
  next();
});

const Twitter = new Twit(authConfig);

axios.get('/api/tweets', (req, res) => {
  console.log('ROUTE HIT!!! !!!');
  Twitter.get('https://api.twitter.com/1.1/users/show.json?screen_name=justinbieber', (req, res) => {
    console.log(res, 'Twitter get log');
    res.send({ data: res.data });
    //   - user name
    // - user screen name (@whatever)
    // - user profile image
    // - tweet content
    // - number of retweets
    // - direct link to the tweet
  });
});

// Twitter.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, (err, data, response) => {
//   console.log(data, "DATA");
// });

Twitter.get('https://api.twitter.com/1.1/users/show.json?screen_name=justinbieber', (req, res) => {
  console.log(res, 'Bieber');
//   - user name
// - user screen name (@whatever)
// - user profile image
// - tweet content
// - number of retweets
// - direct link to the tweet
});

// $ curl --request GET
//   --url 'https://api.twitter.com/1.1/users/show.json?screen_name=twitterdev'
//   --header 'authorization: OAuth oauth_consumer_key="consumer-key-for-app",
//   oauth_nonce="generated-nonce", oauth_signature="generated-signature",
//   oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp",
//   oauth_version="1.0"'

// $ curl --request GET
//   --url 'https://api.twitter.com/1.1/users/show.json?screen_name=twitterdev'
//   --header 'authorization: OAuth oauth_consumer_key="consumer-key-for-app",
//   oauth_nonce="generated-nonce", oauth_signature="generated-signature",
//   oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp",
//   oauth_version="1.0"'

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
