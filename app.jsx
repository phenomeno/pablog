import React from 'react';
import BlogApp from './src/blogapp';

document.addEventListener("DOMContentLoaded", function(event){
    React.render(
        <BlogApp />,
        document.getElementById('content')
    );
});

