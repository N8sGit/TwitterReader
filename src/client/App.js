import React, { Component } from 'react';
import './app.css';
import axios from 'axios';
import SingleTweet from './singleTweet.js';

export default class App extends Component {
  state = { tweets: [1, 2, 3] };

  // tweets here will be processed without regards for template just an array of templated objects
  componentDidMount() {
    this.pullServer();
  }

  pullServer() {
    console.log('hi');
    fetch('http://localhost:8080/api/tweets')
      .then((req, res) => {
        console.log('hit!');
        console.log(res, 'res?');
      });
  }


  //     axios.get('/')
  //     .then((req, res) => {
  //       console.log(res, 'res?');
  //     }).catch(err => console.log(err));
  //   setInterval(this.pullServer, 60000);
  // }

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
