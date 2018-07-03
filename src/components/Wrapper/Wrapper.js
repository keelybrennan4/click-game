import React from "react";
import './Wrapper.css';

//wrapper wraps all the inner components together 
const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;