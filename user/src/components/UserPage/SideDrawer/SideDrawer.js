import React from 'react';

import classes from './SideDrawer.module.css';

const SideDrawer = ({userInfo, userSkills}) => {
    return (
        <div className={classes.SideDrawer}>
            <h1 onClick={userInfo}>Some User</h1>
            <h1 onClick={userSkills}>Skils</h1>
        </div>
    );
}

export default SideDrawer;