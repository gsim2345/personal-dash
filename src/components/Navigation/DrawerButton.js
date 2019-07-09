import React from 'react';
import styled from 'styled-components';
import { ReactComponent as HamburgerIcon } from '../../assets/icons/hamburger.svg';

const ButtonStyled = styled.button`
    color: #546e7a;
    background-color: #fff;
    width: 50px;
    height: 50px;
    padding: 0;
    font-size: 1rem;
    min-width: 0;
    margin: 1rem;
    border-radius: 50%;
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
    box-sizing: border-box;
    min-height: 36px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1;
    @media (min-width: 787px) {
        display: none;
    }
`;

const DrawerButton = (props) => (
    <ButtonStyled onClick={props.clicked}>
        <HamburgerIcon />
    </ButtonStyled>
);

export default DrawerButton;