import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import { Link } from 'react-router';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <div className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/ask">Ask</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

module.exports = NavBar;
