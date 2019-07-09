import React, { useState } from 'react';
//import { connect } from 'react-redux';
import SideDrawer from '../components/Navigation/SideDrawer';
import DrawerButton from '../components/Navigation/DrawerButton';
import { ReactComponent as HamburgerIcon } from '../assets/icons/hamburger.svg';



const Layout = () =>  {

    const [showDrawer, setShowDrawer] = useState(false);
    
    const drawerClosedHandler = (props) => {
        setShowDrawer(false);
    }

    const drawerOpenedHandler = (props) => {
        setShowDrawer(true);
    }
    

    /*
    sideDrawerToggleHandler = () => {
        // use prevstate to avoid async problems
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }*/

    
        return(
            <>  
                {!showDrawer && <DrawerButton clicked={drawerOpenedHandler} />}
                {showDrawer &&<SideDrawer 
                closeFunction={drawerClosedHandler}
                open={showDrawer}/>}
                
            </>
        )
    
} 

export default Layout;