import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

import classes from './User.module.css';
import SideDrawer from '../../components/UserPage/SideDrawer/SideDrawer';
import UserInfo from '../../components/UserPage/UserInfo/UserInfo';
import Skills from '../../components/UserPage/Skills/Skills';
import img from '../../asset/SM.png';

class User extends Component {

    state = {
        infPage: 'userinfo',
        name: '',
        email: '',
        birthday: ''
    }

    componentDidMount() {
        if (localStorage.usertoken === undefined) {
            this.props.history.push('/login');
        }
        else {
            const token = localStorage.usertoken;
            const decode = jwt_decode(token);
            this.setState({
                name: decode.name,
                email: decode.email,
                birthday: decode.birthday
            })
        }
    }



    setUserInfo = () => {
        this.setState({ infPage: 'userinfo' })
    }

    setUserSkills = () => {
        this.setState({ infPage: 'userskills' })
    }

    render() {
        return (
            <div className={classes.User}>
                <SideDrawer userInfo={this.setUserInfo} userSkills={this.setUserSkills} />
                <img src={img} alt="User" />
                {this.state.infPage === 'userinfo' ? <UserInfo name={this.state.name} email={this.state.email} birthday={this.state.birthday} /> :
                    <Skills />}
            </div>
        );
    }
}

export default User;