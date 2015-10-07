import React from 'react';
import BlogInfoModel from './bloginfomodel';

class BlogInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            photoURL: '',
            title: '',
            bio: ''
        };
    }

    componentDidMount() {
        BlogInfoModel.get(function(data) {
            this.setState(data);
        }.bind(this));  
    }

    render() { 
        return (<div>
            <img src={this.state.photoURL} />
            <h1>{this.state.title}</h1>
            <h4>{this.state.bio}</h4>
        </div>);
    }
}

module.exports = BlogInfo;

