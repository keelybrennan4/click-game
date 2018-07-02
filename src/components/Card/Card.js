import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <img src = {props.img} onClick={props.onClick} alt={props.img} />
    );
};
export default Card;
