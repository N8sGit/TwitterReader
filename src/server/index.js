const express = require('express');
const os = require('os');
const Twit = require('twit');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

let Twitter = new Twit({
  consumer_key: 'MmkFJCacN0NoUl4DUkZKHFdQ4',
  consumer_secret: 'Ao546qA9JAMFyMkdUgvhluWkITLg2Eac0XOyuMJkQ8EHZfkwR9',
  access_token: '2948033138-gfGz3ZoM2FWSjwnmELso8jLGlb4uCyPgrjvQopH',
  access_token_secret: 'jzYHyDXzDV9xDEdU5Nzusv1KYtCTvSb311Urw37ik5u8e',
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
});

app.get('/api/tweets', (req, res) => {
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
