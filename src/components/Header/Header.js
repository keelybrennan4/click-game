//score with counter function

import React from 'react';
import './Header.css';

const Header = props => (
    <header className="header">
        <nav className="navbar">
            <ul>
                <li className="brand">
                    <a href="/"><h1>City Skyline Memory Game</h1></a>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;