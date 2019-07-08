import React from 'react';
import NavigationItems from './NavigationItems';
import Backdrop from '../UI/Backdrop';


const sideDrawer = (props) => {
    /*
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }*/
    return (
        
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div >
                <div >
                    
                </div>
                
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
            </div>
        </>
    );
}

export default sideDrawer;