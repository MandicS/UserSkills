const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sequelize = require('sequelize');

const User = require('../modules/User');
const Skills = require('../modules/Skill');
Skills.belongsTo(User, { foreignKey: 'user_id' });

users.use(cors());

process.env.SECRET_KEY = 'secret';

users.post('/register', (req, res) => {
    const { name, email, password, birthday } = req.body;
    const userData = {
        name: name,
        email: email,
        password: password,
        birthday: birthday
    }
    User.findOne({
        where: {
            email: email
        }
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(password, 10, (err, hash) => {
                    userData.password = hash;
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.email + ' registered' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            }
            else {
                res.json({ error: 'User alredy exist' });
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

users.post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findOne({
        where: {
            email: email
        }
    })
        .then(user => {
            if (user) {
                if (!bcrypt.compareSync(password, user.password)) {
                    res.status(400).json({ error: 'Password went wrong' })
                }
                else if (bcrypt.compareSync(password, user.password)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: '30s'
                    })
                    res.send(token)
                }
            }
            else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err });
        })
})



users.post('/user/skill', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }
    ).then(user => {
        const { name, description } = req.body;
        const userSkills = {
            name: name,
            description: description,
            user_id: user.user_id
        }
        Skills.create(userSkills)
            .then(skill => {
                res.writeContinue(skill.name + ' is created!')
                Skills.findAll({
                    attributes: ['name', 'description', 'skill_id'],
                    where: { user_id: req.body.user_id }
                }).then(selectedSkill => res.send(selectedSkill))
            })
        // .then(
        //     res.setTimeout(100, [Skills.findAll({
        //         attributes: ['name', 'description'],
        //         where: {user_id: user.user_id}
        //     }).then(selectedSkill => res.json(selectedSkill))])
        // )
        // .catch(res.status(400).json({error: 'Skill not created'}))
    })
})

users.post('/skills', (req, res) => {
    Skills.findAll({
        attributes: ['name', 'description', 'skill_id'],
        where: { user_id: req.body.user_id }
    }).then(selectedSkill => res.send(selectedSkill))
})

users.put('/skills/update', (req, res) => {
    Skills.findOne({
        where: {
            skill_id: req.body.skill_id
        }
    }).then(skill => {
        Skills.update({name: req.body.name, description: req.body.description }, { fields: ['name', 'description'] })
    }).then(res => {
        res.json(console.log(res))
    }
    )
})

module.exports = users;