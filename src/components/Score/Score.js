import React from "react";
import './Score.css';

const Score = props => (
    <div className="scoreBoard">
    <h3 className="score"> Score: {props.total}</h3>
    <h4 className ="status"> {props.status}</h4>
    </div>
)

export default Score;