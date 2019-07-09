import React from 'react';
import NavigationItems from './NavigationItems';
import Backdrop from '../UI/Backdrop';
import styled , { css }from 'styled-components';

const SideDrawerStyled = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.5s ease-out;
    @media (min-width: 787px) {
            display: none;
    }
`;

// CHECK TRANSITION 
//transform: translateX(${props => props.opening ? '0' : '-100%' });
/*
transform: translate(-100%);
    ${ props => props.opening && css`
        transform: translateX(0);
  `}; */

const sideDrawer = (props) => {
    
    return (
        
        <>
            <Backdrop show={props.open} clicked={props.closeFunction}/>
            <SideDrawerStyled opening={props.open}>
                <nav>
                    <NavigationItems />
                </nav>
            </SideDrawerStyled>
        </>
    );
}

export default sideDrawer;