import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { login } from '../../UserFunctions';
import classes from './LogIn.module.css';

class LogIn extends Component {

    state = {
        email: '',
        password: ''
    }

    emailChangeHandler = (event) => {
        this.setState({ email: event.target.value })
    }

    passwordChangeHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    submitLoginHandler = (e) => {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if(res) {
                window.location.pathname = '/user';
            }
        })
    }

    render() {
        return (
            <div className={classes.LogIn}>
                <form onSubmit={this.submitLoginHandler}>
                    <h1>Log In</h1>
                    <input
                        type='email' 
                        placeholder='E-mail'
                        value={this.state.email}
                        className={classes.Text}
                        onChange={this.emailChangeHandler} />
                    <input
                        type='password'
                        placeholder='Password'
                        className={classes.Text}
                        value={this.state.password}
                        onChange={this.passwordChangeHandler} />
                    <input
                        type='submit'
                        value='Sign In'
                        className={classes.Submit} />
                    <Link to="/register">Register</Link>
                </form>
            </div>
        );
    }
}

export default LogIn;