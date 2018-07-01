import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <img src = {props.img} onClick={props.onClick} className="img-fluid img-thumbnail card" alt={props.img} />
    );
};

export default Card;