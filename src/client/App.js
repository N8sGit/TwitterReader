import React, { Component } from 'react';
import './app.css';
import axios from 'axios';
import { ifError } from 'assert';
import SingleTweet from './singleTweet.js';

export default class App extends Component {
  state = { tweets: [1, 2, 3] };

  // tweets here will be processed without regards for template just an array of templated objects
  componentDidMount() {
    this.pullServer();
  }

  pullServer() {
    fetch('http://localhost:8080/api/tweets')
      .then((req, res) => {
        console.log('hit!');
        console.log(res, 'res?');
        if (res) {
          this.setState({ tweets: res });
        }
      });
    setInterval(this.pullServer, 60000);
  }


  render() {
    const { tweets } = this.state;
    // tweets.length = 5;
    return (
      <div>
        {tweets ? <h1>TweetReader</h1> : <h1>Loading.. please wait!</h1>}
        <div id="text-display">

          {tweets.map(function (value) {
            return <SingleTweet url= {value.url} content={value.content} retweets= {value.retweets} img={value.imgUrl} />;
          })}
        </div>
      </div>
    );
  }
}
