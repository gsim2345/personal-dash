import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => (
    
    <li to={props.link}
    exact={props.exact}>
         {props.children}
    </li>
);

export default NavigationItem;