import React from 'react';
import NavigationItem from './NavigationItem';

const NavigationItems = (props) => (
    // active is the same as active={true}
    <ul >
        <NavigationItem link='/' exact='true'>Home</NavigationItem>
        <NavigationItem link='/orders'>Momentum</NavigationItem>
        <NavigationItem link='/orders'>Calendar</NavigationItem>
        <NavigationItem link='/logout'>Weather</NavigationItem>
        <NavigationItem link='/auth'>Image gallery</NavigationItem>
        <NavigationItem link='/auth'>Longform</NavigationItem>
        
    </ul>
);

export default NavigationItems;