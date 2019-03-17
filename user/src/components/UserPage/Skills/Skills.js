import React, { Component } from 'react';

import classes from './Skills.module.css';
import Skill from './Skill/Skill';
import AddSkill from './AddSkill/AddSkill';
import { userSkills, getSkills } from '../../../UserFunctions';

class Skills extends Component {

    state = {
        skill: null,
        skills: [],
        skName: '',
        skDesc: '',
        setInterval: null
    }

    nameChangeHandler = (e) => {
        this.setState({ skName: e.target.value })
    }

    descriptionChangeHandler = (e) => {
        this.setState({ skDesc: e.target.value })
    }

    submitSkillHandler = (e) => {
        e.preventDefault();

        const skill = {
            name: this.state.skName,
            description: this.state.skDesc
        }

        userSkills(skill).then(res => this.setState({skills: res}))

        this.setState({skName: '', skDesc: ''})
        // const newSkill = {
        //     name: this.nameRef.value,
        //     description: this.descRef.value,
        //     skill_id: Date.now()
        // }
        // const domSkill = Object.assign(this.state.skills, this.state.skills.push(newSkill))
        // this.setState({ skills: domSkill })

        // this.setState({
        //     skName: '',
        //     skDesc: ''
        // })
        // getSkills().then(res => this.setState(Object.assign(this.state.skills, this.state.skills.push(res.data)))).catch((error) => console.log(error))
        // this.setState(Object.assign(this.state.skills, this.state.skills.push(skill)))
    }

    componentDidMount() {
        this.skillsFromDb();
    }

    skillsFromDb = () => {
        getSkills().then(res => this.setState({ skills: res.data })).catch((error) => console.log(error))
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    // Typical usage (don't forget to compare props):
    // if (this.props.userID !== prevProps.userID) {
    //   this.fetchData(this.props.userID);
    // }
    //   }

    render() {
        return (
            <div className={classes.Skills}>
                {this.state.skills.map(sk => (
                    <Skill skillName={sk.name} skillDescription={sk.description} key={sk.skill_id} />
                ))}
                <AddSkill
                    changeName={this.nameChangeHandler}
                    changeDesc={this.descriptionChangeHandler}
                    skName={this.state.skName}
                    skDesc={this.state.skDesc}
                    submit={this.submitSkillHandler}
                    refName={(input) => { this.nameRef = input; }}
                    refDesc={(input) => { this.descRef = input; }} />
            </div>
        );
    }
}

export default Skills;