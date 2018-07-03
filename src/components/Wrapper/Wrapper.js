import React from "react";

//wrap inner component within this one 
const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;