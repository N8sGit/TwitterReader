import React, { Component } from 'react';

export default class TweetCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      username: 'Justin Bieber',
      screenname: '@justinbieber',
      content: 'New album out now!',
      link: "example",
      retweets: 0,
      img: ''
    };
  }


  render() {
    return (
      <div>
       
        <div className="row">
        
          <div className="leftcolumn">
         
            <div className="card">
             <div className="fakeimg">Image</div>
              <h2>{this.state.username}</h2>
              

              <p>{this.state.content}</p>
              <h5>{this.state.screenname} {this.state.retweets}</h5>
              <h5> link: <a href="example.com">{this.state.link}</a></h5>
            </div>
            
          </div>
        </div>
      </div>);
  }
}


{ /* <div className="posts-container">
            <div className="post">
                    <h1 id="single-title" className="title">{post.title}</h1>
                    { post.image ? <img src ={post.image} /> : null}
            <div className="post-text" id="single-text" dangerouslySetInnerHTML={htmlText} />
        </div>
            <div className="post-data" id="single-date">{formatDate(post.createdAt)}</div>
</div>  */ }


//   - user name
// - user screen name (@whatever)
// - user profile image
// - tweet content
// - number of retweets
// - direct link to the tweet
