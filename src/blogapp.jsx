import React from 'react';
import BlogInfo from './bloginfo';
import NavBar from './navbar';
import Posts from './posts';

class BlogApp extends React.Component {
    render() {
        return (<div>
            <BlogInfo />
            <NavBar />
            <Posts />
        </div>);
    }
}

module.exports = BlogApp;
