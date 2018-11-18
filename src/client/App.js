import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  state = { tweets: [] };

  // tweets here will be processed without regards for template just an array of templated objects
  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { tweets } = this.state;
    return (
      <div>
        {tweets ? <h1>Welcome</h1> : <h1>Loading.. please wait!</h1>}
        <div id="text-display">
Tweets go here :
          {tweets}
        </div>
      </div>
    );
  }
}
