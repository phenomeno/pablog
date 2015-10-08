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
            <div style={{height: '8em', marginTop: '4.5em', position: 'relative'}}>
                <img src={this.state.photoURL}  
                id="bloginfo_img"/>
           </div>
            <h1 style={{fontSize: '56px', textAlign:'center', fontWeight: '300', marginBottom:'0px', marginTop:'0px'}}>
                {this.state.title}
            </h1>
            <h4 style={{marginTop: '10px', marginBottom:'10px', textAlign:'center', fontWeight: '500', fontSize:'20px'}}>
                {this.state.bio}
            </h4>
        </div>);
    }
}

module.exports = BlogInfo;

