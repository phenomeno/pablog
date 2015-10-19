import React from 'react';
import $ from 'jquery';

class CreatePostView extends React.Component {
  constructor(props) {
    super(props);
    if(!global.__SERVER__) {
      $.get('/api/v1/is_logged',  function(data){
        console.log(data);
        if(data.err) {
          global.loginInfo = null;
        } else {
          global.loginInfo = data;
        }
        this.forceUpdate();
      }.bind(this));
    }
  }

  handleClick() {
    var title = this.refs.post_title.getDOMNode().value;
    var body = this.refs.post_body.getDOMNode().value;
    $.post('/api/v1/posts', {title: title, body: body}, function(data) {
      if (data.err) {
        console.log('error');
      } else {
        location.href="/";
      }
      this.forceUpdate();
    }.bind(this));
  }

  render() {
    if (global.loginInfo) {
      return (
        <div>
          <input type="text" ref="post_title" />
          <textarea ref="post_body"></textarea>
          <button onClick={this.handleClick.bind(this)}>Create Post</button>
        </div>
      )
    } else {
      return (
        <div>
          You must be signed in to post.
        </div>
      )
    }
  }
}

module.exports = CreatePostView;
