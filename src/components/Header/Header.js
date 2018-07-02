//score with counter function

import React from 'react';
import './Header.css';

const Header = props => (
    <header className="header">
        <nav className="navbar">
            <ul>
                <li className="brand">
                    <a href="/"><h1>City Skyline Memory Game</h1></a>
                </li><br></br>
                <li className="score">
                    Score: {props.score}
                </li>
            </ul>
        </nav>
        <h2>Click on an image to earn one point, but don't click on any more than once!</h2>
    </header>
);

export default Header;