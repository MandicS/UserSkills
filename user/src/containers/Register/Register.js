import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

import { register } from '../../UserFunctions';
import classes from './Register.module.css';

class SignUp extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        date: new Date()
    }

    nameChangeHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    passwordChangeHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    emailChangeHandler = (event) => {
        this.setState({ email: event.target.value })
    }

    onChangeDate = (date) => {this.setState({ date }); console.log(this.state.date)}

    submitHandler = (event) => {
        event.preventDefault();

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            birthday: this.state.date
        }

        register(user).then(res => {
            this.props.history.push(`/login`);
        })
    }

    // onRouteChange = () => {
    //     window.location.pathname = '/user';
    // }

    render() {
        return (
            <div className={classes.SignUp}>
                <form onSubmit={this.submitHandler}>
                    <h1>Sign Up</h1>
                    <input
                        onChange={this.nameChangeHandler}
                        type='text'
                        placeholder='Name'
                        value={this.state.name}
                        className={classes.Text} />
                    <input
                        onChange={this.emailChangeHandler}
                        type='email'
                        placeholder='E-mail'
                        value={this.state.email}
                        className={classes.Text} />
                    <input
                        onChange={this.passwordChangeHandler}
                        type='password'
                        placeholder='Password'
                        value={this.state.password}
                        className={classes.Text} />
                    <DatePicker
                        className={classes.Date}
                        onChange={this.onChangeDate}
                        value={this.state.date} />
                    <input
                        type='submit'
                        value='Create Account'
                        className={classes.Submit} />
                </form>
            </div >
        );
    }
}

export default SignUp;