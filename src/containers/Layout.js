import React, { useState } from 'react';
//import { connect } from 'react-redux';
import SideDrawer from '../components/Navigation/SideDrawer';
import { ReactComponent as HamburgerIcon } from '../assets/icons/hamburger.svg';



const Layout = () =>  {

    const [showDrawer, setShowDrawer] = useState(false);
    
    const drawerCloseHandler = (props) => {
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
                {!showDrawer && <HamburgerIcon onClick={drawerCloseHandler} />}
                {showDrawer &&<SideDrawer 
                closed={drawerCloseHandler}
                open={showDrawer}/>}
                
            </>
        )
    
} 

export default Layout;