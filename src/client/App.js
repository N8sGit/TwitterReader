import React, { Component } from 'react';
import './app.css';
import axios from 'axios';
import SingleTweet from './singleTweet.js';

// const config = {
//   headers: {
//     header1: ' http://localhost:8080/api/tweets',
//   }
// };

const data = {
  HTTP_CONTENT_LANGUAGE: self.language
};
console.log(axios.defaults.headers);

export default class App extends Component {
  state = { tweets: [1,2,3] };

  // tweets here will be processed without regards for template just an array of templated objects
  componentDidMount() {
    this.pullServer();
  }

  pullServer() {
    axios.get('/')
      .then((req, res) => {
        console.log(res, 'res?');
      }).catch(err => console.log(err));
    setInterval(this.pullServer, 60000);
  }

  render() {
    const { tweets } = this.state;
    tweets.length = 3;
    return (
      <div>
        {tweets ? <h1>TweetReader</h1> : <h1>Loading.. please wait!</h1>}
        <div id="text-display">
                  
          {tweets.map(function (value) {
            return <SingleTweet />;
          })}
        </div>
      </div>
    );
  }
}

/* <div className="posts-container">
            <div className="post">
                    <h1 id="single-title" className="title">{post.title}</h1>
                    { post.image ? <img src ={post.image} /> : null}
            <div className="post-text" id="single-text" dangerouslySetInnerHTML={htmlText} />
        </div>
            <div className="post-data" id="single-date">{formatDate(post.createdAt)}</div>
        </div> */

// if(tweetData){
//   if(tweetData.length){
//       tweetNodes = tweetData.map(function(tweet, index) {
//         return (
//           <SingleTweet key={index} id = {tweet.id} text = {tweet.text}> </SingleTweet>
//           );

//         });
//   } else return (<div> We couldn't find any happy tweets. :( </div>)
// }
