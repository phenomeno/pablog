import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import BlogApp from './src/blogapp';
import Posts from './src/posts';
import About from './src/about';

export const routes = (
<Router>
    <Route path="/" component={BlogApp}>
        <IndexRoute component={Posts} />
        <Route path="about" component={About} />
    </Route>
</Router>);
