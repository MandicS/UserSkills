import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {

    logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('login');
        console.log(localStorage);
    }

    render() {
        return (
            <nav className={classes.Navigation}>
                <p className={classes.Logo}>USER CREATOR</p>
                {this.props.location.pathname === '/user' ?
                    <a href='/user' onClick={this.logOut} className={classes.Comands}>Log Out</a> :
                    <div>
                        <NavLink to='/login' exact className={classes.Comands}>Log In</NavLink>
                        <NavLink to='/register' exact className={classes.Comands}>Register</NavLink></div>}
            </nav>
        );
    }
}

export default withRouter(Navigation);