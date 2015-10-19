import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardText from 'material-ui/lib/card/card-text';
import CardTitle from 'material-ui/lib/card/card-title';
import $ from 'jquery';
import { Link } from 'react-router';

global.loginInfo = null;
class LoginView extends React.Component {
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

  handleClick(e) {
    var username = this.refs.username.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    $.post('/api/v1/login', {username: username, password: password}, function(data){
      if(data.err) {
        global.loginInfo = null;
      } else {
        global.loginInfo = data;
      }
      this.forceUpdate();
    }.bind(this));
  }

  render() {
    if(global.loginInfo) {
      return (<div style={{position: 'absolute', 'top': 5, 'right': 5}}>
            Yo! {global.loginInfo.user.firstname} {global.loginInfo.user.lastname}!
            <p><Link to="/createpost">Create Post</Link></p>
      </div>);
    } else {
      return (<div style={{position: 'absolute', 'top': 5, 'right': 5}}>
            <input type="text" placeholder="Username" ref="username" />
            <input type="password" placeholder="Password" ref="password" />
            <button onClick={this.handleClick.bind(this)}>Login</button>
      </div>)
    }

  }
}

module.exports = LoginView;
