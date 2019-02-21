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
        setInterval: false
    }

    nameChangeHandler = (event) => {
        this.setState({ skName: event.target.value })
    }

    descriptionChangeHandler = (event) => {
        this.setState({ skDesc: event.target.value })
    }

    submitSkillHandler = (e) => {
        e.preventDefault();

        const skill = {
            name: this.state.skName,
            description: this.state.skDesc
        }

        // console.log(skill);

        userSkills(skill)
    }

    componentDidMount() {
        this.getSkillsfromDb();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.skills !== prevState.skills) {
            this.getSkillsfromDb();
        }
        console.log('cDU prSt', prevState.skills)
    }

    componentWillUnmount() {
        this.getSkillsfromDb();
    }

    // componentDidMount() {
    //     this.getSkillsfromDb();
    //     if (!this.state.setInterval) {
    //         let interval = setInterval(this.getSkillsfromDb, 1000);
    //         this.setState({ setInterval: interval })
    //     }

    // }

    // componentDidUnmount() {
    //     if (this.state.setInterval) {
    //         clearInterval(this.state.setInterval);
    //         this.setState({ setInterval: false });
    //     }
    // }

    getSkillsfromDb = () => {
        getSkills().then(res => this.setState({ skills: res.data })).catch((error) => console.log(error))
    }

    // componentDidUpdate(prevProps, prevState) {
    //     getSkills().then(res => {
    //         if(prevState === this.state.skills)
    //         return this.setState({ skills: res.data })
    //     }).catch((error) => console.log(error))
    //     console.log(this.state.skills)
    // }



    render() {
        return (
            <div className={classes.Skills}>
                {this.state.skills.map(sk => (
                    <Skill skillName={sk.name} skillDescription={sk.description} key={sk.skill_id} />
                ))}
                <AddSkill
                    changeName={this.nameChangeHandler}
                    changeDesc={this.descriptionChangeHandler}
                    skName={this.state.name}
                    skDesc={this.state.description}
                    submit={this.submitSkillHandler} />
            </div>
        );
    }
}

export default Skills;