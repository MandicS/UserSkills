import React from 'react';

import classes from './UserInfo.module.css';

const UserInfo = ({ name, email, birthday }) => {
    return (
        <div className={classes.UserInfo}>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{birthday}</h1>
        </div>
    );
}

export default UserInfo;