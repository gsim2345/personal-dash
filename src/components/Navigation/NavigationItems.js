import React from 'react';
import NavigationItem from './NavigationItem';
import styled from 'styled-components';

const ListContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    height: 100%;
`;

const NavigationItems = (props) => (
    // active is the same as active={true}
    <ListContainer >
        <NavigationItem link='/' exact='true'>Home</NavigationItem>
        <NavigationItem link='/momentum'>Momentum</NavigationItem>
        <NavigationItem link='/calendar'>Calendar</NavigationItem>
        <NavigationItem link='/weather'>Weather</NavigationItem>
        <NavigationItem link='/gallery'>Image gallery</NavigationItem>
        <NavigationItem link='/news'>News</NavigationItem>
    </ListContainer>
);

export default NavigationItems;