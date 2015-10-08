import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import MenuItem from 'material-ui/lib/menu/menu-item';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <div className="nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/ask">Ask</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

module.exports = NavBar;
