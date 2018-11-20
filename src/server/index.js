const express = require('express');
const os = require('os');
const Twit = require('twit');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');


const app = express();
// app.use(cors());
// app.use(express.static('dist'));
// app.use(bodyParser.json({ type: '*/*' })); // Parses incoming requests as JSON
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', function (req, res) {
//   res.sendFile(path.resolve(__dirname, './public/index.html'));
// });

// app.get('/bundle.js', function (req, res) {
//   console.log('bundle server hit');
//   res.sendFile(path.resolve(__dirname, './public/bundle.js'));
// });

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};


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

app.get('/api/tweets', (req, res) => {
  Twitter.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=justinbieber&count=5', (req, res) => {
    // console.log(res, 'Twitter get log');
    let data = Array.from(res)

    let result = data.map((value) => {
        return {content: value.text, url: value.user.url, retweets: value.retweet_count, imgUrl: value.user.profile_image_url }
    })
    console.log(result, 'result')
    // let dataSlice = data.slice(0,6)
    // console.log(dataSlice, 'slice')
   
    //   - user name
    // - user screen name (@whatever)
    // - user profile image
    // - tweet content
    // - number of retweets
    // - direct link to the tweet
    return result;
  }).then(function (result) {
    res.send(result);
  }).catch(err => console.log(err));
});

// Twitter.get('https://api.twitter.com/1.1/users/show.json?screen_name=justinbieber', (req, res) => {
//   console.log(res, 'Bieber');
// //   - user name
// // - user screen name (@whatever)
// // - user profile image
// // - tweet content
// // - number of retweets
// // - direct link to the tweet
// });

// $ curl --request GET
//   --url 'https://api.twitter.com/1.1/users/show.json?screen_name=twitterdev'
//   --header 'authorization: OAuth oauth_consumer_key="consumer-key-for-app",
//   oauth_nonce="generated-nonce", oauth_signature="generated-signature",
//   oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp",
//   oauth_version="1.0"'

app.listen(8080, () => console.log('Listening on port 8080!'));
