import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const register = newUser => {
    return axios.post('users/register', {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        birthday: newUser.birthday,
    })
        .then(res => {
            console.log("Registered");
        })
}

export const login = user => {
    return axios.post('users/login', {
        email: user.email,
        password: user.password
    })
        .then(res => {
            localStorage.setItem('usertoken', res.data);
            return res.data;
        })
        .catch(err => {
            console.log(err);
        })
}

export const userSkills = skill => {
    const token = localStorage.usertoken;
    const decode = jwt_decode(token);
    const data =  axios.post('users/user/skill', {
        email: decode.email,
        user_id: decode.user_id,
        name: skill.name,
        description: skill.description
    })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err);
        })
        console.log(data)
    return data
}

export const getSkills = () => {
    const token = localStorage.usertoken;
    const decode = jwt_decode(token);
    return axios.post('users/skills', {
        user_id: decode.user_id
    }).then(res => res)
}