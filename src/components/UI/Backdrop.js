import React from 'react';

const Backdrop = (props) => (
    props.show ? <div onClick={props.clicked}></div> : null
);

export default Backdrop;