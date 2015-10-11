import React from 'react';
import { routes } from './routes';

document.addEventListener("DOMContentLoaded", function(event){
    React.render(routes, document.getElementById('content'));
});

