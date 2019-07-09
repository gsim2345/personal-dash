import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ListItem = styled.li`
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;
`;

const LinkStyled = styled.a`
    color: #546e7a;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
    &:active,
    &:hover {
        color: #40A4C8;
      }
`;

// Style navlink: 
//https://stackoverflow.com/questions/52244161/apply-styled-component-style-to-a-third-party-components

const NavigationItem = (props) => (
    
    <ListItem> 
        <LinkStyled 
            href='/' 
            to={props.link}
            exact={props.exact}>
            {props.children}
         </LinkStyled>
    </ListItem>
);

export default NavigationItem;