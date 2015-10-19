import React from 'react';
import BlogInfo from './bloginfo';
import NavBar from './navbar';
import Posts from './posts';
import LoginView from './loginview';
//import { Link } from 'react-router';

class BlogApp extends React.Component {

    render() {
        return (<div>
            <LoginView />
            <BlogInfo />
            <NavBar />
            {this.props.children}
        </div>);
    }
}

module.exports = BlogApp;
