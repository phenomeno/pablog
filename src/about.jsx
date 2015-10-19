import React from 'react';
import $ from 'jquery';

class UserRow extends React.Component {
  render() {
    return (
      <div>
        <div>Username: {this.props.user.username}</div>
        <div>Name: {this.props.user.firstname} {this.props.user.lastname}</div>
        <img src={this.props.user.avatar_url} style={{width:"100px", height:"100px"}} />
        <div>Bio: {this.props.user.bio}</div>
        <br />
      </div>
    )
  }
}

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    if (!global.__SERVER__) {
      $.get('/api/v1/users', function(data){
        this.setState(data);
      }.bind(this));
    }
  }

  render(){
    var users = this.state.users;
    return (<div>
      {users.map(user => <UserRow user={user} />)}
    </div>)
  }
}
